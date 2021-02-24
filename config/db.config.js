const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.Animal = require('../models/animal.model.js')(sequelize, Sequelize);
db.User = require('../models/user.model.js')(sequelize, Sequelize);
db.Role = require('../models/role.model.js')(sequelize, Sequelize);

db.Role.belongsToMany(db.User, { through: 'user_roles', foreignKey: 'roleId', otherKey: 'userId'});
db.User.belongsToMany(db.Role, { through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId'});
 
module.exports = db;
