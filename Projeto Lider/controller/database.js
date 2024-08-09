//RECEBE AS TRANSAÇÕES REALIZADAS NO DIA ATUAL E APRESENTA NA TELA
fetch("/data")
    .then(response => response.json())
    .then(dados => {
        // PEGANDO DIV DE ARMAZENAMENTO DOS DADOS
        let sale = document.getElementById("sale");
        
        dados.forEach(postagem => { // Use "postagem" para referenciar cada item individual
            let itemDiv = document.createElement('div');
            itemDiv.classList.add("item");
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

            itemDiv.innerHTML = 
            `
                <div class="item">
                    <div class="${tipo}"></div>
                    <p class="desc">${postagem.descricao}</p>
                    <p class="date">${postagemData.toLocaleDateString()}</p>
                    <p class="val">${postagem.valor}</p>
                </div>
            `;
            sale.appendChild(itemDiv);
        });  
    })
    .catch(error => console.error('Erro ao carregar as postagens:', error));

//RECEBENDO OS VALORES TRANSITADOS DO DIA (ENTRADA)
fetch("/data")
    .then(response => response.json())
    .then(dados => {
        // PEGANDO DIV DE ARMAZENAMENTO DOS DADOS
        let resultado = document.getElementById("resultado");
        let total = parseFloat(resultado.innerHTML) || 0;
        let hoje = new Date();

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
        });
        // Atualiza o conteúdo da div com o somatório formatado
        resultado.innerHTML = total.toFixed(2);
    })
    .catch(error => console.error('Erro ao carregar as postagens:', error));

//RECEBENDO OS VALORES TRANSITADOS DO DIA (SAIDA)
fetch("/data")
    .then(response => response.json())
    .then(dados => {
        // PEGANDO DIV DE ARMAZENAMENTO DOS DADOS
        let resultado = document.getElementById("resultado2");
        let total = parseFloat(resultado.innerHTML) || 0;
        let hoje = new Date();

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
            
            if(postagem.tipo === "vermelho" && postagemData.getTime() === hoje.getTime() && !isNaN(valor)) {
                    total += valor;
            }
        });
        // Atualiza o conteúdo da div com o somatório formatado
        resultado.innerHTML = total.toFixed(2);
    })
    .catch(error => console.error('Erro ao carregar as postagens:', error));

//RECEBENDO OS VALORES TRANSITADOS DO MES (ENTRADA)
fetch("/data")
    .then(response => response.json())
    .then(dados => {
        // PEGANDO DIV DE ARMAZENAMENTO DOS DADOS
        let input = document.getElementById("input");
        let total = parseFloat(input.innerHTML) || 0;
        let mes = new Date();

        // Normaliza a data de hoje para considerar apenas o ano, mês e dia
        mes.setHours(0, 0, 0, 0);
        
        dados.forEach(postagem => { // Use "postagem" para referenciar cada item individual
            let valor = parseFloat(postagem.valor);
            let postagemData = new Date(postagem.data);

            // Compensar o fuso horário ao criar a data
            let timezoneOffset = postagemData.getTimezoneOffset() * 60000; // Em milissegundos
            postagemData = new Date(postagemData.getTime() + timezoneOffset);

            // Normaliza a data da postagem para considerar apenas o ano, mês e dia
            postagemData.setHours(0, 0, 0, 0);
            
            if(postagem.tipo === "verde" && postagemData.getMonth() === mes.getMonth() && !isNaN(valor)) {
                    total += valor;
            }
        });
        // Atualiza o conteúdo da div com o somatório formatado
        input.innerHTML = total.toFixed(2);
    })
    .catch(error => console.error('Erro ao carregar as postagens:', error));

//RECEBENDO OS VALORES TRANSITADOS DO MES (SAIDA)
fetch("/data")
    .then(response => response.json())
    .then(dados => {
        // PEGANDO DIV DE ARMAZENAMENTO DOS DADOS
        let output = document.getElementById("output");
        let total = parseFloat(output.innerHTML) || 0;
        let mes = new Date();

        // Normaliza a data de hoje para considerar apenas o ano, mês e dia
        mes.setHours(0, 0, 0, 0);
        
  
        
        dados.forEach(postagem => { // Use "postagem" para referenciar cada item individual
            let valor = parseFloat(postagem.valor);
            let postagemData = new Date(postagem.data);

            // Compensar o fuso horário ao criar a data
            let timezoneOffset = postagemData.getTimezoneOffset() * 60000; // Em milissegundos
            postagemData = new Date(postagemData.getTime() + timezoneOffset);

            // Normaliza a data da postagem para considerar apenas o ano, mês e dia
            postagemData.setHours(0, 0, 0, 0);
            
            if(postagem.tipo === "vermelho" && postagemData.getMonth() === mes.getMonth() && !isNaN(valor)) {
                    total += valor;
            }
        });
        // Atualiza o conteúdo da div com o somatório formatado
        output.innerHTML = total.toFixed(2);
    })
    .catch(error => console.error('Erro ao carregar as postagens:', error));

//RELATORIOS
//RECEBE O MES PARA SER FILTRADO
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Testando o carregamento de scripts");
        const urlParams = new URLSearchParams(window.location.search);
        const mes = urlParams.get("mes");
        console.log("Valor de 'mes':", mes); // Esse console.log vai para o console do navegador

        //RECEBE AS TRANSAÇÕES REALIZADAS NOS DIAS DE CADA MES E APRESENTA NA TELA (MENSAL)
        if(mes){
            fetch(`/data`)  // Adiciona o mês como parte da URL para pegar os dados corretos
                .then(response => response.json())
                .then(dados => {
                    let sale = document.getElementById("saleMes");  // Div onde os dados serão exibidos
                        
                    // PEGANDO DIV DE ARMAZENAMENTO DOS DADOS DO OUTPUT
                    let output = document.getElementById("outputMes");
                    let total1 = parseFloat(output.innerHTML) || 0;
                    let data = new Date();

                    // PEGANDO DIV DE ARMAZENAMENTO DOS DADOS DO INPUT
                    let input = document.getElementById("inputMes");
                    let total = parseFloat(input.innerHTML) || 0;

                    // Normaliza a data de hoje para considerar apenas o ano, mês e dia
                    data.setHours(0, 0, 0, 0);
                    console.log(data);
                    

                    dados.forEach(postagem => {
                        let itemDiv = document.createElement('div');
                        itemDiv.classList.add("item");
                        //PEGANDO VALORES VINDO DO BANCO
                        let valor = parseFloat(postagem.valor);

                        // Convertendo a data da postagem para ajustar o fuso horário
                        let postagemData = new Date(postagem.data);
                        let timezoneOffset = postagemData.getTimezoneOffset() * 60000;
                        postagemData = new Date(postagemData.getTime() + timezoneOffset);

                        postagemData.setHours(0, 0, 0, 0);

                        //PEGANDO O MES PARA FAZER A CONVERSÃO
                        //console.log(postagemData.getMonth());
                        let postagemMes = postagemData.getMonth() + 1; // +1 porque getMonth() retorna 0-11
                        let postagemAno = postagemData.getFullYear();
                        let mesAno = mes.split('-');
                        let mesSelecionado = parseInt(mesAno[1]);
                        let anoSelecionado = parseInt(mesAno[0]);
                        console.log(mes +" " +postagemMes + " "+postagemAno +" "+ mesAno +" "+ mesSelecionado + " "+anoSelecionado);
                        // saida : 2024-06 7 2024 2024,06 6 2024
                
                        if(mesSelecionado === postagemMes && anoSelecionado === postagemAno){
                         
                            //VERIFICAÇÃO DO TIPO DO ITEM
                            let tipo
                            if(postagem.tipo === "verde"){
                                tipo = "tipo2"
                                
                            }else{
                                tipo = "tipo1"
                            }

                            itemDiv.innerHTML = 
                                `
                                    <div class="item">
                                        <div class="${tipo}"></div>
                                        <p class="desc">${postagem.descricao}</p>
                                        <p class="date">${postagemData.toLocaleDateString()}</p>
                                        <p class="val">${postagem.valor}</p>
                                    </div>
                                    `;
                            sale.appendChild(itemDiv);  // Adiciona o item à div "saleMes"

                            //ADICIONA DIACORDO COM O MES DENTRO DA DIV (OUTPUT)
                            if(postagem.tipo === "vermelho") {
                                total1 += valor;
                            }
                            
                            //ADICIONA DIACORDO COM O MES DENTRO DA DIV (INPUT)
                            if(postagem.tipo === "verde") {
                                total += valor;
                            }
                            console.log(total1);
                            console.log(total);
                            
                            // Atualiza o conteúdo da div com o somatório formatado
                            output.innerHTML = total1.toFixed(2);
                            input.innerHTML = total.toFixed(2);
                            
                        }
                        
                })
            })
            .catch(error => console.error('Erro ao carregar as postagens:', error));
        }
    });
//RECEBE O ANO PARA SER FILTRADO
/*document.addEventListener("DOMContentLoaded", function() {
    console.log("Testando o carregamento de scripts");
    const urlParams = new URLSearchParams(window.location.search);
    const ano = urlParams.get("ano");
    console.log("Valor de 'mes':", ano); // Esse console.log vai para o console do navegador

    //RECEBE AS TRANSAÇÕES REALIZADAS NOS DIAS DE CADA MES E APRESENTA NA TELA (ANUAL)
    if(ano){
        fetch(`/data`)  // Adiciona o mês como parte da URL para pegar os dados corretos
            .then(response => response.json())
            .then(dados => {
                let sale = document.getElementById("saleAno");  // Div onde os dados serão exibidos
                    
                dados.forEach(postagem => {
                    let itemDiv = document.createElement('div');
                    itemDiv.classList.add("item");

                    // Convertendo a data da postagem para ajustar o fuso horário
                    let postagemData = new Date(postagem.data);
                    let timezoneOffset = postagemData.getTimezoneOffset() * 60000;
                    postagemData = new Date(postagemData.getTime() + timezoneOffset);

                    postagemData.setHours(0, 0, 0, 0);

                    //PEGANDO O MES PARA FAZER A CONVERSÃO
                    //console.log(postagemData.getMonth());
                    let postagemMes = postagemData.getMonth() + 1; // +1 porque getMonth() retorna 0-11
                    let postagemAno = postagemData.getFullYear();
                    let mesAno = ano.split('-');
                    let mesSelecionado = parseInt(mesAno[1]);
                    let anoSelecionado = parseInt(mesAno[0]);
                    console.log(ano +" " +postagemMes + " "+postagemAno +" "+ mesAno +" "+ mesSelecionado + " "+anoSelecionado);
                    // saida : 2024-06 7 2024 2024,06 6 2024
            
                    if(mesSelecionado === postagemMes && anoSelecionado === postagemAno){
                     
                        //VERIFICAÇÃO DO TIPO DO ITEM
                        let tipo
                        if(postagem.tipo === "verde"){
                            tipo = "tipo2"
                            
                        }else{
                            tipo = "tipo1"
                        }

                        itemDiv.innerHTML = 
                            `
                                <div class="item">
                                    <div class="${tipo}"></div>
                                    <p class="desc">${postagem.descricao}</p>
                                    <p class="date">${postagemData.toLocaleDateString()}</p>
                                    <p class="val">${postagem.valor}</p>
                                </div>
                                `;
                        sale.appendChild(itemDiv);  // Adiciona o item à div "saleMes"
                    }
            })
        })
        .catch(error => console.error('Erro ao carregar as postagens:', error));
    }
}); */