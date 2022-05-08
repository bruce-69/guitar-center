const express = require("express");
const path = require("path")
const app = express();


app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public ")));


const guitars = [
   
      {
        id: "TRUE-RANGE 7",
         
        madeiras: "cedro .pau-marfin",

        captadores: "2-BDB-Slant-alnico-humbuckers-by-Zaganin-Pickups",
         
        imagem: "http://www.tagima.com.br/uploads/produtos/truerange7_g1.jpg",

      }

         ] 






app.get("/", (req, res) => {
  res.render('index',{guitars});
});



app.listen(3000);