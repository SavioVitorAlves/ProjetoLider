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
                console.log(tipo);
                
            }else{
                tipo = "tipo1"
                console.log(tipo);
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
//RECEBE AS TRANSAÇÕES REALIZADAS NOS DIAS DE CADA MES E APRESENTA NA TELA (MENSAL)
fetch(`/data`)  // Adiciona o mês como parte da URL para pegar os dados corretos
        .then(response => response.json())
        .then(dados => {
            let sale = document.getElementById("saleMes");  // Div onde os dados serão exibidos
            
            
            dados.forEach(postagem => {
                let itemDiv = document.createElement('div');
                itemDiv.classList.add("item");

                // Convertendo a data da postagem para ajustar o fuso horário
                let postagemData = new Date(postagem.data);
                let timezoneOffset = postagemData.getTimezoneOffset() * 60000;
                postagemData = new Date(postagemData.getTime() + timezoneOffset);

                postagemData.setHours(0, 0, 0, 0);


                        //VERIFICAÇÃO DO TIPO DO ITEM
            let tipo
            if(postagem.tipo === "verde"){
                tipo = "tipo2"
                console.log(tipo);
                
            }else{
                tipo = "tipo1"
                console.log(tipo);
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
                })
            })
        .catch(error => console.error('Erro ao carregar as postagens:', error));

