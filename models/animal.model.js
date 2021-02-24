module.exports = (sequelize, Sequelize) => {
	const Animal = sequelize.define('animal', {	
	    id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
	    name: {
			type: Sequelize.STRING,
			allowNull: false
	    },
	    type: {
		    type: Sequelize.STRING,
			allowNull: false
  	    },
	    sex: {
			type: Sequelize.STRING
	    },
	    age: {
			type: Sequelize.INTEGER
        }
	});
	
	return Animal;
}