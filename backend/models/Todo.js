const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  videoId: {type: String},
  image: {type: String},
  level: {type: String},
  energy: {type: String},
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Todo', TodoSchema)
