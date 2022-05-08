const express = require("express");
const app = express();

const guitars = [
   
      {
        id: "TRUE-RANGE 7",
         
        madeiras: "cedro .pau-marfin",

        captadores: "2-BDB-Slant-alnico-humbuckers-by-Zaganin-Pickups",
         
        imagem: "http://www.tagima.com.br/uploads/produtos/truerange7_g1.jpg",

      }

         ] 




app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render('index',{guitars});
});



app.listen(3000);