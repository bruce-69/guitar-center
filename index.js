const express = require("express");
const path = require("path");
const app = express();


app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const guitars = [
   
      {
        id: "TRUE-RANGE 7",
         
        madeiras: "cedro . pau-marfin",

        captadores: "2-BDB-Slant-alnico-humbuckers-by-Zaganin-Pickups",
         
        imagem: "http://www.tagima.com.br/uploads/produtos/truerange7_g1.jpg",

      },
      
   
        {
          id: "JAZZ 1900",
           
          madeiras: "Maple . Flamed maple ",
  
          captadores: "Hotbucker minihumbucker cerâmico e 2 Alnico blue lipsticks by Tagima",
           
          imagem: "http://www.tagima.com.br/uploads/produtos/JAZZ-1900_VSB_g1.jpg",
  
        },
  
         ]




//rotas

app.get("/", (req, res) => {
  res.render('index',{guitars});
});



app.listen(3000);

app.post("/add", (req, res)=>{

const cadastro = req.body;
guitars.id = guitars.length + 1;

guitars.push(guitars)

res.redirect("/");
});

