//RECEBE O ANO PARA SER FILTRADO
document.addEventListener("DOMContentLoaded", function() {
    console.log("Testando o carregamento de scripts");
    const urlParams = new URLSearchParams(window.location.search);
    const ano = urlParams.get("ano");
    console.log("Valor de 'ano':", ano);

    if (ano) {
fetch(`/data`)
.then(response => response.json())
.then(dados => {
    const ctx = document.getElementById('graficoAno');
    const nomeMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const meses = Array.from({ length: 12 }, (_, i) => i + 1);
    const transacoesPorMes = {
        entradas: new Array(12).fill(0),
        saidas: new Array(12).fill(0)
    };

    console.log(transacoesPorMes);
    
    // Processa as transações
    dados.forEach(postagem => {
        let postagemData = new Date(postagem.data);
        let timezoneOffset = postagemData.getTimezoneOffset() * 60000;
        postagemData = new Date(postagemData.getTime() + timezoneOffset);
        let postagemMes = postagemData.getMonth() ;
        let postagemAno = postagemData.getFullYear();
        

        /*let mesAno = ano.split('-');
        let mesSelecionado = parseInt(mesAno[1]);
        let anoSelecionado = parseInt(mesAno[0]);
        console.log(ano +" " +postagemMes + " "+postagemAno +" "+ mesAno +" "+ mesSelecionado + " "+anoSelecionado);*/
        // saida : 2024-06 7 2024 2024,06 6 2024

        if (ano == postagemAno) {
            if (postagem.tipo === "verde") {
                transacoesPorMes.entradas[postagemMes] += parseFloat(postagem.valor);
                
            } else {
                transacoesPorMes.saidas[postagemMes] += parseFloat(postagem.valor);
                
            }
        }
    });

    // Renderiza as transações por mês
    meses.forEach(mes => {
        //const itemDiv = document.createElement('div');
        //itemDiv.classList.add("item");
        
        new Chart(ctx, {
            type: 'line',
            data: {
              labels: nomeMes,
              datasets: [
                {
                    label: 'Entradas',
                    data:transacoesPorMes.entradas,
                    borderWidth: 1
                },
                {
                    label: 'Saidas',
                    data: transacoesPorMes.saidas,
                    borderWidth: 1
                }
            ]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });

        sale.appendChild(itemDiv);
    });
    
})
.catch(error => console.error('Erro ao carregar as postagens:', error));
    }
});
//========================================
document.addEventListener("DOMContentLoaded", function() {
    console.log("Testando o carregamento de scripts");
    const urlParams = new URLSearchParams(window.location.search);
    const mes = urlParams.get("mes");
    console.log("Valor de 'mes':", mes);

    if (mes) {
fetch(`/data`)
            .then(response => response.json())
            .then(dados => {
                const ctx = document.getElementById('graficoMes')
                const diasNoMes = new Date(parseInt(mes.split('-')[0]), parseInt(mes.split('-')[1]), 0).getDate();
                const dias = Array.from({ length: diasNoMes }, (_, i) => i + 1);
                
                console.log(dias);
                
                const transacoesPorDia = {
                    entradas: new Array(diasNoMes).fill(0),
                    saidas: new Array(diasNoMes).fill(0)
                };

                // Processa as transações
                dados.forEach(postagem => {
                    let postagemData = new Date(postagem.data);
                    let timezoneOffset = postagemData.getTimezoneOffset() * 60000;
                    postagemData = new Date(postagemData.getTime() + timezoneOffset);
                    let postagemMes = postagemData.getMonth() + 1;
                    let postagemAno = postagemData.getFullYear();
                    let postagemDia = postagemData.getDate();

                    let [anoSelecionado, mesSelecionado] = mes.split('-').map(Number);

                    if (anoSelecionado === postagemAno && mesSelecionado === postagemMes) {
                        if (postagem.tipo === "verde") {
                            transacoesPorDia.entradas[postagemDia - 1] += parseFloat(postagem.valor);
                        } else {
                            transacoesPorDia.saidas[postagemDia - 1] += parseFloat(postagem.valor);
                        }
                    }
                });

                // Cria o gráfico com os dados processados
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: dias.map(dia => dia.toString().padStart(2, '0')), // Formata os dias com 2 dígitos
                        datasets: [
                            {
                                label: 'Entradas',
                                data: transacoesPorDia.entradas,
                                borderColor: '#006ace',
                                backgroundColor: '#006ace',
                                fill: false,
                                borderWidth: 2
                            },
                            {
                                label: 'Saídas',
                                data: transacoesPorDia.saidas,
                                borderColor: 'red',
                                backgroundColor: 'red',
                                fill: false,
                                borderWidth: 2
                            }
                        ]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true // Garante que o eixo Y comece do zero
                            }
                        }
                    }
                });
            })
            .catch(error => console.error('Erro ao carregar as postagens:', error));
    }
});

