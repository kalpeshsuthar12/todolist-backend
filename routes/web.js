const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const todoController = require('../controller/todoController');

router.post('/api/signup', userController.signup); 
router.post('/api/signin', userController.signin); 
router.get('/api/list/:id', todoController.list );
router.post('/api/add-todo', todoController.add ); 
router.delete('/api/delete-todo/:id', todoController.delete );
router.post('/api/update-todo/:id', todoController.update ); 

module.exports = router;