const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todoRoutes = require('./routes/todoRoutes')
const db = require('./config/db')

const app = express()
const port = 5000

// Cấu hình CORS
app.use(cors())

db.connect()

// Middleware
app.use(express.json())

// Routes
app.use('/api/todos', todoRoutes)

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Server is running on port ${port}`))
}

module.exports = app
