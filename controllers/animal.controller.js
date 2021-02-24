const db = require('../config/db.config.js');
const Animal = db.Animal;

/**
 * Save a Animal object to database MySQL/PostgreSQL
 * @param {*} req 
 * @param {*} res 
 */
const createAnimal = (req, res) => {
    let animal = {};

    try{
        // Building Animal object from upoading request's body
        Animal.name = req.body.name;
        Animal.type = req.body.type;
        Animal.sex = req.body.sex;
        Animal.age = req.body.age;
    
        // Save to MySQL database
        Animal.create(animal, 
                          {attributes: ['id', 'name', 'type', 'sex', 'age']})
                    .then(result => {    
                      res.status(200).json(result);
                    });
    }catch(error){
        res.status(500).json({
            message: "Failed to create new animal",
            error: error.message
        });
    }
}

/**
 * Retrieve Animal information from database
 * @param {*} req 
 * @param {*} res 
 */
const getAnimals = (req, res) => {
    // find all Animal information from 
    try{
        Animal.findAll({attributes: ['id', 'name', 'type', 'sex', 'age']})
        .then(animals => {
            res.status(200).json(animals);
        })
    }catch(error) {
        res.status(500).json({
            message: "Unable to retreive animal data",
            error: error
        });
    }
}

const getAnimal = (req, res) => {
    Animal.findByPk(req.params.id, 
                        {attributes: ['id', 'name', 'type', 'sex', 'age']})
        .then(animal => {
          res.status(200).json(animal);
        }).catch(error => {
          res.status(500).json({
              message: "Unable to retreive animal data",
              error: error
          });
        })
}

/**
 * Updating a Animal
 * @param {*} req 
 * @param {*} res 
 */
const updateAnimal = async (req, res) => {
    try{
        let animal = await Animal.findByPk(req.body.id);
    
        if(!animal){
            // return a response to client
            res.status(404).json({
                message: "Not Found for updating a animal with id: " + animalId,
                error: "404"
            });
        } else {    
            // update new change to database
            let updatedObject = {
                name: req.body.name,
                age: req.body.age,
                type: req.body.type,
                sex: req.body.sex
            }
            let result = await Animal.update(updatedObject,
                              { 
                                returning: true,
                                where: {id: req.body.id},
                                attributes: ['id', 'name', 'type', 'sex', 'age']
                              }
                            );

            // return the response to client
            if(!result) {
                res.status(500).json({
                    message: "Can not update a animal with id: " + req.params.id
                });
            }

            res.status(200).json(result);
        }
    } catch(error){
        res.status(500).json({
            message: "Can not update a animal with id: " + req.params.id,
            error: error.message
        });
    }
}

/**
 *  Delete a Animal by ID
 * @param {*} req 
 * @param {*} res 
 */
const deleteAnimal = async (req, res) => {
    try{
        let animalId = req.params.id;
        let animal = await Animal.findByPk(animalId);

        if(!animal){
            res.status(404).json({
                message: "Does Not exist an animal with id: " + animalId
            });
        } else {
            await animal.destroy();
            res.status(200);
        }
    } catch(error) {
        res.status(500).json({
            message: "Can NOT delete an animal with id: " + req.params.id,
            error: error.message
        });
    }
}

module.exports = { getAnimals, createAnimal, deleteAnimal, updateAnimal, getAnimal };