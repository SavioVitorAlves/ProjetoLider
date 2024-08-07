
    function somavalores(){ 
        var result = document.getElementById("valor").value;
        var text = document.getElementById("resultado").innerHTML;
        var clean = "";
        var somatorio = (parseFloat(result) + parseFloat(text)).toFixed(2).replace(".", ",");
        document.getElementById("resultado").innerHTML = somatorio;
        document.getElementById("valor").value = clean;

    }
    function somavalores2(){ 
        var result = document.getElementById("valor").value;
        var text = document.getElementById("resultado2").innerHTML;
        var somatorio = (parseFloat(result) + parseFloat(text)).toFixed(2).replace(".", ",");
        document.getElementById("resultado2").innerHTML = somatorio;
        var clean = "";
        document.getElementById("valor").value = clean;
    }
    function ponto() {
        var char = document.getElementById("valor").value.length;
        
        if (char == 2) {
            document.getElementById("valor").value = document.getElementById("valor").value + ".";
    
        }
    }
//CONECTANDO COM JSON
fetch("/data")
    .then(response => response.json())
    .then(dados => {
        // PEGANDO DIV DE ARMAZENAMENTO DOS DADOS
        let sale = document.getElementById("sale");
        
        dados.forEach(postagem => { // Use "postagem" para referenciar cada item individual
            let itemDiv = document.createElement('div');
            itemDiv.classList.add("item");
            itemDiv.innerHTML = 
            `
                <div class="item">
                    <p class="desc">${postagem.descricao}</p>
                    <p class="date">${new Date(postagem.data).toLocaleDateString()}</p>
                    <p class="val">${postagem.valor}</p>
                </div>
            `;
            sale.appendChild(itemDiv);
        });  
    })
    .catch(error => console.error('Erro ao carregar as postagens:', error));


//ENVIANDO FORMULARIO
document.getElementById('sum').addEventListener('click', function(event) {
    event.preventDefault()//previne o envio antecipado da formulario 
    // Submete o formulário manualmente
    document.getElementById('myForm').submit();
    
});
document.getElementById('subtract').addEventListener('click', function(event) {
    event.preventDefault()//previne o envio antecipado da formulario 
    // Submete o formulário manualmente
    document.getElementById()
    
});