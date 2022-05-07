const express = require('express'); //inporta o express
const app = express();

app.get("/",  (req, res) =>{
  res.send('Hello');
});


app.get("/", (req , res )=>{
res.render("views");
})

app.listen(3000);


