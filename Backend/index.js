const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const Postagem = require("./models/Post")

const path = require('path');

//bosy parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Servindo arquivos estáticos (CSS, JS, Imagens)
app.use(express.static(path.join(__dirname, '../Projeto Lider')));


//ROTAS
app.get("/html", function(req, res){
    res.sendFile(path.join(__dirname, "../Projeto Lider/index.html"));
});

app.post("/add", function(req, res){
    
    let price =  req.body.valor

    price = price.replace(',', '.');

    price = parseFloat(price);
    
    if (isNaN(price) || price < 0) {
        return res.status(400).json({ error: 'Preço inválido' });
    }

    Postagem.create({
        descricao: req.body.descricao,
        valor: price,
        data: req.body.data
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
/*fetch("http://localhost:8081/data")
    .then(response => response.json())
    .then(dados => {
    //PEGANDO DIV DE ARMAZENAMENTO DOS DADOS
    let sale = document.getElementById("sale");
    
    dados.forEach(postagens => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add("item");
        itemDiv.innerHTML = 
        `
            <div class="item">
                <p class="desc">${postagens.descricao}</p>
                <p class="date">${new Date(postagem.data).toLocaleDateString()}</p>
                <p class="val">${postagens.valor.toFixed(2)}</p>
            </div>
        `
        sale.appendChild(itemDiv);
    });  
}).catch(error => console.error('Erro ao carregar as postagens:', error));*/
//PORTA DE FUNCIONAMENTO DO SERVIDOR
const PORT = 8081
app.listen(PORT, function(){
    console.log("Servidor Rodadno Na URL http://localhost:8081");
});