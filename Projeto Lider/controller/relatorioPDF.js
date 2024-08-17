//RECEBE AS TRANSAÇÕES REALIZADAS NO DIA ATUAL E APRESENTA NO RELATORIO
fetch(`/data`)
    .then(response => response.json())
    .then(dados => {
        // PEGANDO DIV DE ARMAZENAMENTO DOS DADOS
        let entradas = document.getElementById("entradas");
        let saidas = document.getElementById("saidas");
        let hoje = new Date();
        console.log('testando');
        
        
        // Normaliza a data de hoje para considerar apenas o ano, mês e dia
        hoje.setHours(0, 0, 0, 0);
        console.log(hoje);

        dados.forEach(postagem => { // Use "postagem" para referenciar cada item individual
            let itemDivEntrada = document.createElement('div');
            let itemDivSaida = document.createElement('div');
            //itemDiv.classList.add("item");
            let postagemData = new Date(postagem.data);
            let timezoneOffset = postagemData.getTimezoneOffset() * 60000;
            postagemData = new Date(postagemData.getTime() + timezoneOffset);

            postagemData.setHours(0, 0, 0, 0);

            //VERIFICAÇÃO DO TIPO DO ITEM
            let tipo
            if(postagem.tipo === "verde"){
                tipo = "tipo2"
                
            }else{
                tipo = "tipo1"
            }
            if(postagem.tipo === "verde" && postagemData.getTime() === hoje.getTime()){
                itemDivEntrada.innerHTML = 
                    `
                        <div class="item">
                            
                            <p class="desc">${postagem.descricao}</p>
                            <p class="date">${postagemData.toLocaleDateString()}</p>
                            <p class="val">${postagem.valor}</p> 
                        </div>
                    `;
            }
            if(postagem.tipo === "vermelho" && postagemData.getTime() === hoje.getTime()){
                itemDivSaida.innerHTML = 
                    `
                        <div class="item">
                            
                            <p class="desc">${postagem.descricao}</p>
                            <p class="date">${postagemData.toLocaleDateString()}</p>
                            <p class="val">${postagem.valor}</p> 
                        </div>
                    `;
            }
            
            entradas.appendChild(itemDivEntrada);
            saidas.appendChild(itemDivSaida);
        });  
    })
    .catch(error => console.error('Erro ao carregar as postagens:', error));

//RECEBENDO OS VALORES TRANSITADOS DO DIA (ENTRADA)
fetch("/data")
    .then(response => response.json())
    .then(dados => {
        // PEGANDO DIV DE ARMAZENAMENTO DOS DADOS
        let input = document.getElementById("input");
        let total = parseFloat(input.innerHTML) || 0;
        let hoje = new Date();

        // PEGANDO DIV DE ARMAZENAMENTO DOS DADOS
        let output = document.getElementById("output");
        let total1 = parseFloat(output.innerHTML) || 0;
        

        // Normaliza a data de hoje para considerar apenas o ano, mês e dia
        hoje.setHours(0, 0, 0, 0);
        
        dados.forEach(postagem => { // Use "postagem" para referenciar cada item individual
            let valor = parseFloat(postagem.valor);
            let postagemData = new Date(postagem.data);

            // Compensar o fuso horário ao criar a data
            let timezoneOffset = postagemData.getTimezoneOffset() * 60000; // Em milissegundos
            postagemData = new Date(postagemData.getTime() + timezoneOffset);

            // Normaliza a data da postagem para considerar apenas o ano, mês e dia
            postagemData.setHours(0, 0, 0, 0);
            
            if(postagem.tipo === "verde" && postagemData.getTime() === hoje.getTime() && !isNaN(valor)) {
                    total += valor;
            }
            if(postagem.tipo === "vermelho" && postagemData.getTime() === hoje.getTime() && !isNaN(valor)) {
                total1 += valor;
        }
        });
        // Atualiza o conteúdo da div com o somatório formatado
        input.innerHTML = total.toFixed(2);
        output.innerHTML = total1.toFixed(2);
    })
    .catch(error => console.error('Erro ao carregar as postagens:', error));

//SAI DO RELATORIO 
document.getElementById("sair").addEventListener('click', function(event) {

    //retorna o ususario para a pagina principal
    window.location.href = '/html';
});
//IMPRIMIR O RELATORIO 
document.getElementById("imprimir").addEventListener('click', function(event) {
    window.print();
});
//DATA NO RELATORIO
const data = new Date();
const mes = "0" + (data.getMonth() + 1)

const dataHora = data.getDate() + "/" + mes +"/"+data.getFullYear() +" - "+ data.getHours() +":"+ data.getMinutes()+":"+data.getSeconds() 
document.getElementById("hora").innerHTML = dataHora; 
