module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {	
	    id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
	    firstname: {
			type: Sequelize.STRING,
            allowNull: false
	    },
	    lastname: {
		    type: Sequelize.STRING
  	    },
	    username: {
			type: Sequelize.STRING,
            allowNull: false
	    },
	    password: {
			type: Sequelize.STRING,
            allowNull: false
        },
	});
	
	return User;
}