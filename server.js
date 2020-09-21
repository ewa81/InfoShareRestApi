require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
const connect = require('./db/connect');
const connectDB = require('./db/connect');

app.use(express.json());

connectDB();
const todoRouter = require('./routes/todo');
app.use('/todo', todoRouter);

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const todos = [
  {
    id: 0,
    title: "Zrozumieć zadanie",
    description: "Przeczytać opis zadania i go zrozumieć",
    status: "DONE",
    createdAt: "2016-04-26T09:00:00+0200"
  },
  {
    id: 1,
    title: "Dostęp do API",
    description: "Uzyskać dostęp do API i zrozumieć strukturę danych",
    status: "IN_PROGRESS",
    createdAt: "2016-04-26T09:01:00+0200"
  },
  {
    id: 2,
    title: "Lista zadań",
    description:
      "Wyświetlanie listy zadań ze stronicowaniem (max 5ele mentów na stronie) posortowanych od najstarszych",
    status: "TODO",
    createdAt: "2016-04-26T09:02:00+0200"
  },
  {
    id: 3,
    title: "Usuwanie",
    description:
      "Usuwanie z listy wielu zadań na raz z dodatkowym okienkiem potwierdzającym",
    status: "TODO",
    createdAt: "2016-04-26T09:03:00+0200"
  },
  {
    id: 4,
    title: "Edycja",
    description:
      "Edytowanie szczegółów zadania (tytuł, opis, status [czekające, realizowane, gotowe]) z możliwością zmiany statusów tylko w przód (czekające -> realizowane, realizowane -> gotowe)",
    status: "TODO",
    createdAt: "2016-04-26T09:04:00+0200"
  },
  {
    id: 5,
    title: "Liczniki",
    description:
      "Obok listy dodać liczniki zadań w poszczególnych statusach (wszystkich, nie tylko z wyświetlanej strony)",
    status: "TODO",
    createdAt: "2016-04-26T09:05:00+0200"
  },
  {
    id: 6,
    title: "Kolory statusów",
    description: "Rozróżnianie kolorami zadań w poszczególnych statusach",
    status: "TODO",
    createdAt: "2016-04-26T09:06:00+0200"
  },
  {
    id: 7,
    title: "Filtrowanie po statusach",
    description:
      "Ograniczanie widoku tylko do wybranych statusów (jednego bądź wielu)",
    status: "TODO",
    createdAt: "2016-04-26T09:07:00+0200"
  },
  {
    id: 8,
    title: "Statystyki dzienne",
    description:
      "Zliczanie ile maksymalnie zadań było w tym samym czasie realizowanych w danym dniu",
    status: "TODO",
    createdAt: "2016-04-26T09:08:00+0200"
  },
  {
    id: 9,
    title: "Zaniedbane zadania",
    description:
      "Wyróżnianie zadań, które są realizowane dłużej niż 3 dni bądź czekają na realizację dłużej niż 5 dni (oba parametry niezależnie konfigurowalne i zapisywane w ciasteczku)",
    status: "TODO",
    createdAt: "2016-04-26T09:09:00+0200"
  }
];

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const newTodo = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    createdAt: req.body.createdAt
  };
  todos.push(newTodo);
  res.json(newTodo);
});

app.put("/api/todos/:id", (req, res) => {
  const findId = req.params.id;

  const todoIndex = todos.findIndex(todo => todo.id == findId);

  todos[todoIndex] = req.body;
  res.json(todos[todoIndex]);
});

app.delete("/api/todos/:id", (req, res) => {
  const findId = req.params.id;

  const todoIndex = todos.findIndex(todo => todo.id == findId);

  todos.splice(todoIndex, 1);

  res.json({
    message: `Successfully removed task with id: ${findId}.`
  });
});

app.listen(PORT, () => console.log(`App is running on localhost: ${PORT}`));
