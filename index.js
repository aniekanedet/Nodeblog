const path = require("path");
const express = require("express");
const expressEdge = require('express-edge');

// Init App
const app = new express();

app.use(express.static("pages"));

// express-edge template engine

app.use(expressEdge);
app.set('views', __dirname + '/views');

// Home Route
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "pages/index.html"));
// });

// Home Views with edge template engine
app.get('/', (req, res) => {
    res.render('index');
});

app.get("/note", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/note.html"));
});

// Start Server
app.listen(4000, () => {
  console.log("App listening on port 4000");
});
