const config = require('../config/config.js');
const db = require('../config/db.config.js');
const Role = db.Role;
const User = db.User;

const checkDuplicateUserName = (req, res, next) => {
	// -> Check Username is already in use
	User.findOne({
		where: {
			username: req.body.username
		} 
	}).then(user => {
		if(user){
			res.status(400).send("Username is already taken!");
			return;
		}
        next();
	});
}

const checkRolesExisted = (req, res, next) => {	
	for(let i = 0; i < req.body.roles.length; i++){
		if(!ROLES.includes(req.body.roles[i].toUpperCase())){
			res.status(400).send("Does not exist Role: " + req.body.roles[i]);
			return;
		}
	}
	next();
}

const isAdmin = (req, res, next) => {
	let token = req.headers['x-access-token'];
	
	User.findByPk(req.userId)
		.then(user => {
			user.getRoles().then(roles => {
				for(let i = 0; i < roles.length; i++){
					if(roles[i].name.toUpperCase() === "ADMIN"){
						next();
						return;
					}
				}
				
				res.status(403).send("Require Admin Role!");
				return;
			})
		})
}

module.exports = { isAdmin, checkDuplicateUserName, checkRolesExisted };