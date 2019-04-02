const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const con = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM nodetest.nodetable;", function(err, result) {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(result));
  });
});
