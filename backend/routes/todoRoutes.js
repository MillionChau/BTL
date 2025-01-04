const express = require('express')
const TodoController = require('../controllers/todoController')
const router = express.Router()

router.get('/', TodoController.getTodos)  
router.post('/', TodoController.addTodo)
router.get('/:id/edit', TodoController.editTodo)
router.put('/:id', TodoController.update)
router.delete('/:id', TodoController.delete)

module.exports = router
