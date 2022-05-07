const express = require('express');
const app = express();

app.get("/",  (req, res) =>{
  res.send('Hello');
});


app.get("/home", (req , res )=>{
res.send("olá " )
})

app.listen(3000);


