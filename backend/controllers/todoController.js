const Todo = require('../models/Todo')

class TodoController {
  // Lấy danh sách Todo
  async getTodos(req, res, next) {
    try {
      const todos = await Todo.find()
      res.status(200).json(todos)
    } catch (error) {
      console.error(error)  // Log lỗi chi tiết
      res.status(500).json({ message: 'Internal Server Error' })
      next(error)
    }
  }

  // Thêm Todo mới
  async addTodo(req, res, next) {
    try {
      const { name, description, videoId, image, level, energy } = req.body

      // Kiểm tra nếu tên Todo không tồn tại
      if (!name) {
        return res.status(400).json({ message: 'Name is required' })
      }

      // Kiểm tra xem Todo đã tồn tại chưa
      const existingTodo = await Todo.findOne({ name })
      if (existingTodo) {
        return res.status(400).json({ message: 'Todo with this name already exists' })
      }

      const newTodo = new Todo({
        name,
        description,
        videoId,
        image,
        level,
        energy,
      })

      await newTodo.save()
      res.status(201).json({ todo: newTodo })
    } catch (error) {
      console.error(error)  // Log lỗi chi tiết
      res.status(500).json({ message: 'Failed to add todo', error: error.message })
      next(error)
    }
  }

  // Lấy Todo để chỉnh sửa
  async editTodo(req, res, next) {
    try {
      const todo = await Todo.findById(req.params.id)
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' })
      }
      res.status(200).json(todo)
    } catch (error) {
      console.error(error)  // Log lỗi chi tiết
      res.status(500).json({ message: 'Failed to retrieve todo', error: error.message })
      next(error)
    }
  }

  // Cập nhật Todo
  async update(req, res, next) {
    try {
      const { id } = req.params
      const { name, description, videoId, image, level, energy } = req.body

      const todo = await Todo.findById(id)
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' })
      }

      // Cập nhật các trường
      todo.name = name || todo.name
      todo.description = description || todo.description
      todo.videoId = videoId || todo.videoId
      todo.image = image || todo.image
      todo.level = level || todo.level
      todo.energy = energy || todo.energy

      await todo.save()
      res.status(200).json(todo)
    } catch (error) {
      console.error(error)  // Log lỗi chi tiết
      res.status(500).json({ message: 'Server error while updating Todo', error: error.message })
      next(error)
    }
  }

  // Xóa Todo
  async delete(req, res, next) {
    try {
      const { id } = req.params
      const deletedTodo = await Todo.findByIdAndDelete(id)

      if (!deletedTodo) {
        return res.status(404).json({ message: 'Todo not found' })
      }

      res.status(200).json({ message: 'Todo deleted successfully', todo: deletedTodo })
    } catch (error) {
      console.error(error)  // Log lỗi chi tiết
      res.status(500).json({ message: 'Failed to delete todo', error: error.message })
      next(error)
    }
  }
}

module.exports = new TodoController()
