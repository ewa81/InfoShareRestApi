const express = require("express");
const app = express();
const port = 4040;

app.get("/", (request, response) => response.send("Hello World!"));

app.listen(port, () => console.log("App is running on localhost:4040"));
