const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/todo', function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    })
    return;
  }
  // put it in mongodb
})

app.get('/todos', function (req, res) {
  res.json();
})

app.put('/complete', function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    })
    return;
  }
})

app.listen(port, function () {
  console.log('Server running!');
})
