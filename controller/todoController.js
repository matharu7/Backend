const Todo = require("../models/Todo");

const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

const createTodo = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  const todo = await Todo.create({ title });
  res.status(201).json(todo);
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndDelete(id);
  res.json(todo);
};

module.exports = { getTodos, createTodo, deleteTodo };
