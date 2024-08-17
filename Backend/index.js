const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const Postagem = require("./models/Post")
const User = require("./models/User")

const path = require('path');
const { log } = require("console");

//bosy parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Servindo arquivos estáticos (CSS, JS, Imagens)
//app.use(express.static(path.join(__dirname, '../Projeto Lider')));
app.use('/static', express.static(path.join(__dirname, '../Projeto Lider')));


//ROTAS
app.get("/", function(req, res){
    res.redirect("/entrar");
});

app.get("/entrar", function(req, res){
    res.sendFile(path.join(__dirname, "../Projeto Lider/view/tela_login.html"));
});
app.get("/html", function(req, res){
    res.sendFile(path.join(__dirname, "../Projeto Lider/index.html"));
});
app.get("/relatorio", function(req, res){
    res.sendFile(path.join(__dirname, "../Projeto Lider/view/relatorioPDF.html"));
});
app.post("/add/:tipo", function(req, res){
    
    let price =  req.body.valor

    price = price.replace(',', '.');

    price = parseFloat(price);
    
    if (isNaN(price) || price < 0) {
        return res.status(400).json({ error: 'Preço inválido' });
    }

    let tipo = req.params.tipo
    
    Postagem.create({
        descricao: req.body.descricao,
        valor: price,
        data: req.body.data,
        tipo: req.params.tipo
    }).then(function(){
        res.redirect("/html");
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
// Rota para deletar um item pelo ID
app.delete('/items/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const item = await Postagem.findByPk(id);
  
      if (!item) {
        return res.status(404).json({ error: 'Item não encontrado!' });
      }
  
      await item.destroy();
      res.status(200).json({ message: 'Item deletado com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar o item', error });
    }
  });

app.get("/user", async (req, res)=>{
    try{
        const users = await User.findAll();
        res.json(users);
    }catch(error){
        res.status(500).json({ error: "Ocorreu um erro: " + error });
    }
});
app.post("/addUser", (req, res)=>{
    let adm = req.body.adm;
    console.log(adm);
    
    let valida = false
    if(adm !== undefined){
        valida = true
    }
    
    User.create({
        nome: req.body.nomeUser,
        senha: req.body.senhaUser,
        atorizacao: valida
    }).then(function(){
        res.redirect("/html");
    }).catch(function(erro){
        res.send("Houve um erro: "+ erro)
    })
})
// Rota para deletar um usuario pelo ID
app.delete('/deleteUser/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const item = await User.findByPk(id);
  
      if (!item) {
        return res.status(404).json({ error: 'Item não encontrado!' });
      }
  
      await item.destroy();
      res.status(200).json({ message: 'Item deletado com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar o item', error });
    }
  });
app.post("/filtro", (req, res)=>{
    try{
        const mes = req.body.mes; // Captura o valor do input "mes"
        res.redirect(`static/view/mensal.html?mes=${mes}`); // Redireciona para mesal.html com o valor de mes

        /*const postagens = await Postagem.findAll();
        res.json(postagens);*/
    }catch(error){
        res.status(500).json({ error: "Ocorreu um erro: " + error });
    }
});
app.post("/filtroAno", (req, res)=>{
    try{
        const ano = req.body.ano; // Captura o valor do input "mes"
        res.redirect(`static/view/anual.html?ano=${ano}`); // Redireciona para mesal.html com o valor de mes

        /*const postagens = await Postagem.findAll();
        res.json(postagens);*/
    }catch(error){
        res.status(500).json({ error: "Ocorreu um erro: " + error });
    }
});




//PORTA DE FUNCIONAMENTO DO SERVIDOR
const PORT = 8081
app.listen(PORT, function(){
    console.log("Servidor Rodadno Na URL http://localhost:8081");
});