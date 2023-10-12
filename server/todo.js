// Example server using Express.js
const express = require('express');
const app = express();
app.use(express.json());

let todos = [];

// Create a new todo
app.post('/todos', (req, res) => {
    const { text } = req.body;
    const newTodo = { id: Date.now(), text };
    todos.push(newTodo);
    res.json(newTodo);
});

// Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Update a todo by ID
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newText = req.body.text;
    todos = todos.map(todo => (todo.id === id ? { id, text: newText } : todo));
    res.json({ message: 'Todo updated' });
});

// Delete a todo by ID
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.json({ message: 'Todo deleted' });
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
