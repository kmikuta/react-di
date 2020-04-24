const bodyParser = require("body-parser");

const todos = {
  0: {
    id: "0",
    name: "Do sth",
    author: "Me",
    finished: false,
    created: new Date(),
  },
  1: {
    id: "1",
    name: "And then sth",
    author: "Me",
    finished: false,
    created: new Date(),
  },
  2: {
    id: "2",
    name: "And finally sth",
    author: "Me",
    finished: true,
    created: new Date(),
  },
};

function mockServer(app) {
  app.use(bodyParser.json());

  app.get("/todos", (_, res) => {
    res.json(Object.values(todos));
  });

  app.post("/todos", (req, res) => {
    const todo = req.body;
    const newId = Object.keys(todos).length;
    todo.id = newId;
    todo.created = new Date();
    todos[newId] = todo;
    res.json(todo);
  });

  app.post("/todos/:id/toggle", (req, res) => {
    const id = req.params.id;
    todos[id].finished = !todos[id].finished;
    res.json(todos[id]);
  });
}

module.exports = mockServer;
