const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const Postagem = require("./models/Post")

const path = require('path');
const { log } = require("console");

//bosy parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Servindo arquivos estáticos (CSS, JS, Imagens)
app.use(express.static(path.join(__dirname, '../Projeto Lider')));


//ROTAS
app.get("/html", function(req, res){
    res.sendFile(path.join(__dirname, "../Projeto Lider/index.html"));
});

app.post("/add/:tipo", function(req, res){
    
    let price =  req.body.valor

    price = price.replace(',', '.');

    price = parseFloat(price);
    
    if (isNaN(price) || price < 0) {
        return res.status(400).json({ error: 'Preço inválido' });
    }

    let tipo = req.params.tipo
    console.log(tipo);
    
    Postagem.create({
        descricao: req.body.descricao,
        valor: price,
        data: req.body.data,
        tipo: req.params.tipo
    }).then(function(){
        res.redirect("/");
    }).catch(function(erro){
        res.send("Houve um erro: "+ erro)
    })
})

app.get("/data", async (req, res)=>{
    try{
        
        const postagens = await Postagem.findAll();
        res.json(postagens);
    }catch(error){
        res.status(500).json({ error: "Ocorreu um erro: " + error });
    }
});

//PORTA DE FUNCIONAMENTO DO SERVIDOR
const PORT = 8081
app.listen(PORT, function(){
    console.log("Servidor Rodadno Na URL http://localhost:8081");
});