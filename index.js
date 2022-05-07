app.set("view engine", "ejs");
const express = require("express");
const app = express();


const guitars = [
    {
      id : "JETBLUES COSMOS",
      madeiras: "cedro , pau marfin , pau, marupa ",
      capitadores: " 2 Tagima Silverbucker Alnico 5 com cover de metal",
      Imagen:"http://www.tagima.com.br/uploads/produtos/jetblues_cosmos_g1.jpg",
    }

]








app.set('view engine', 'ejs');


app.get("/", ( req, res )=>{
res.render("index", guitars);
});

app.listen(3000,( ) =>{

})