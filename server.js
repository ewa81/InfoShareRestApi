const express = require("express");
const app = express();
const port = 8080;

app.get("/", (request, response) => response.send("Hello World!"));

app.listen(port, () => console.log(`App is running on localhost: ${port}`));
