const bcrypt = require('bcryptjs');
const http = require('http');
const WebSocket = require('ws');
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./config/db.config.js');
let router = require('./routers/router.js');

const app = express();

global.__basedir = __dirname;
 

const Animal = db.Animal;
const Role = db.Role;
const User = db.User;

app.use(bodyParser.json());
app.use(express.static('resources'));
app.use('/', router);

// Create a Server
const server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
})

db.sequelize.sync({force: true}).then(() => {

    const animals = [
      { name: 'Jack', type: 'Dog', age: 6, sex: 'Male'},
      { name: 'Boots', type: 'Cat', age: 11, sex: 'Female'},
      { name: 'Dorthy', type: 'Fish', age: 3, sex: 'Female'},
    ]
    
    for( let i = 0; i < animals.length; i++){
      Animal.create(animals[i]);
    }

  Role.create({
    id: 1,
    name: "USER"
  });
  
  Role.create({
    id: 2,
    name: "ADMIN"
  })

  bcrypt.hash('admin', 8).then(pw => User.create({firstname: 'admin', lastname: 'admin', username: 'admin', password: pw})).then(user => user.setRoles(2));
}); 