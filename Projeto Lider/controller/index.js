

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

    //ENVIANDO FORMULARIO PRO BANCO DE DADOS (RECEITA)
document.getElementById('sum').addEventListener('click', function(event) {
    event.preventDefault()//previne o envio antecipado da formulario
    
    // Adicione o parâmetro `tipo` à URL de ação do formulário
    const tipo = 'verde'; // Substitua pelo valor desejado
    document.getElementById('myForm').action = `/add/${tipo}`;

    // Submete o formulário manualmente
    document.getElementById('myForm').submit();
    
});
//ENVIANDO FORMULARIO PRO BANCO DE DADOS (DESPESSAS)
document.getElementById('subtract').addEventListener('click', function(event) {
    event.preventDefault()//previne o envio antecipado da formulario 
    
    // Adicione o parâmetro `tipo` à URL de ação do formulário
    const tipo = 'vermelho'; // Substitua pelo valor desejado
    document.getElementById('myForm').action = `/add/${tipo}`;

    // Submete o formulário manualmente
    document.getElementById('myForm').submit();
});
//INSERIR UM NOVO ANO DO SELECT QUANDO CHEGAR UM NOVO ANO
      // Array para armazenar os anos já adicionados
      let anosDisponiveis = [];

      // Função para inserir ano no select
      function inserirAno(ano) {
          if (!anosDisponiveis.includes(ano)) {
              anosDisponiveis.push(ano);
              const anoSelect = document.getElementById('anoSelect');
              const option = document.createElement('option');
              option.value = ano;
              option.textContent = ano;
              anoSelect.appendChild(option);
              console.log(`Ano ${ano} foi adicionado ao select.`);
          }
      }

      // Função para verificar o ano atual e atualizar o select
      function verificarAnoAtual() {
          const anoAtual = new Date().getFullYear();
          inserirAno(anoAtual);
      }

      // Verifica o ano atual ao carregar a página
      document.addEventListener("DOMContentLoaded", function() {
          verificarAnoAtual();

          // Verifica a mudança de ano a cada 10 segundos (ajuste conforme necessário)
          setInterval(() => {
              verificarAnoAtual();
          }, 10000);
      });

const menu = document.getElementById('menu');
const lista = document.getElementById('lista'); 
        
    function ativaMenu(){
        if(lista.style.display == 'none'){
            lista.style.display = 'block';
              
        }else{
            lista.style.display = 'none';
              
        }
    }