const express = require("express");
const app = express(); // instanciates a express function(which is a built-in class) for using

const PORT = 25565;

app.get("/", function(req, res){ //home route
    res.send("<h1> Hello World! </h1>") //including HTML inside 
});

app.get("/about", function(req, res){ //about route
  res.send("<p> Simple Server project created by Fabio L. </p>" + "<p> Any suggestions, send an email.</p>");
})

app.listen(PORT, function() {
  console.log("Server online on port " + PORT);
}); // must be the last command
