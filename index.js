import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = [];

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        newItems : items
    });
});

app.post("/submit",(req,res) =>{
    var userItem = req.body.inputt;
    items.push(userItem);
    res.redirect("/");
});

app.listen(port, ()=>{
    console.log(`Litening on port ${port}.`);
});
