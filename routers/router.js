let express = require('express');
let router = express.Router();
 
const animals = require('../controllers/animal.controller.js');
const login = require('../controllers/login.controller');

const jwt = require('../middleware/jwt');
const auth = require('../middleware/verify');


router.post('/api/auth/signup', [auth.checkDuplicateUserName, auth.checkRolesExisted], login.signup);
router.post('/api/auth/signin', login.signin);

router.post('/api/animal',[jwt.verifyToken, auth.isAdmin], animals.createAnimal);
router.get('/api/animals', animals.getAnimals);
router.put('/api/animal/:id', [jwt.verifyToken, auth.isAdmin], animals.updateAnimal);
router.delete('/api/animal/:id', [jwt.verifyToken, auth.isAdmin], animals.deleteAnimal);

module.exports = router;