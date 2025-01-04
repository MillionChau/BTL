const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const Todo = require('../models/Todo');

describe('Todo Controller', () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('addTodo should create a new todo', async () => {
    const newTodo = {
      name: 'New Todo',
      description: 'Description of new todo',
    };

    const response = await request(app)
      .post('/api/todos')
      .send(newTodo);

    expect(response.status).toBe(201);
    expect(response.body.todo.name).toBe('New Todo');
    expect(response.body.todo.description).toBe('Description of new todo');
  });

  test('addTodo should return error if todo already exists', async () => {
    const newTodo = {
      name: 'Existing Todo',
      description: 'Description of existing todo',
    };

    await request(app)
      .post('/api/todos')
      .send(newTodo);

    const response = await request(app)
      .post('/api/todos')
      .send(newTodo);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Todo with this name already exists');
  });
});
