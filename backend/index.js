const express = require('express');
const { createTodo } = require('./types');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/todo', function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
})

app.get('/todos', function (req, res) {
  res.json();
})

app.put('/complete', function (req, res) {

})

app.listen(port, function () {
  console.log('Server running!');
})
