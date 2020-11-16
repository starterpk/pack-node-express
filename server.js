const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const server = http.createServer(app);
const port = 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(path.join(__dirname, "assets"))); // Require static assets from public folder

app.set("view engine", "ejs"); // enables use of Embedded JavaScript files .ejs

const DATA = ["Node", "Express", "ejs"];

app
  .route("/")
  .get((req, res) => {
    console.log("get");

    res.render("index", { data: DATA });
  })
  .post((req, res) => {
    console.log("post");
    const payload = req.body.payload; // bear in mind that req.body.payload is basically looking for a value with name="payload"
    // do something with payload
    console.log(payload);
  });

server.listen(port);
console.debug("Server listening on port " + port);
