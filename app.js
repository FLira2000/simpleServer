const express = require("express");
const app = express(); // instanciates a express function(which is a built-in class) for using

const port = 25565;

app.get("/", function(req, res){ //home route
    res.send("<h1> Hello World! </h1>") //including HTML inside 
});

app.listen(port, function() {
  console.log("Server online on port " + port);
}); // must be the last command
