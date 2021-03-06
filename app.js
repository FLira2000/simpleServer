const express = require("express");
const app = express(); // instanciates a express function(which is a built-in class) for using

const PORT = 25565;

app.get("/", function(req, res){ //home route
    res.sendFile(__dirname + "/html/home/index.html") //including HTML inside 
});

app.get("/about", function(req, res){ //about route
  res.sendFile(__dirname + "/html/about/index.html");
})

app.listen(PORT, function() {
  console.log("Server online on port " + PORT);
}); // must be the last command
