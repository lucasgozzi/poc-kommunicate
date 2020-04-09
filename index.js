var express = require("express");

var app = express();
app.use(express.json());

app.get("/", function (req, res) {
  console.log(req.body);
  res.send("Hello World!" + JSON.stringify(req.body));
});

app.post("/", function (req, res) {
  console.log(req.body);
  res.send("Hello World!" + JSON.stringify(req.body));
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
