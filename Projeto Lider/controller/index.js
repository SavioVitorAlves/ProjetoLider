
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

//ENVIANDO FORMULARIO PRO BANCO DE DADOS (DESPESSAS)
document.getElementById('verificar').addEventListener('click', function(event) {
    event.preventDefault()//previne o envio antecipado da formulario 
    
    // Adicione o parâmetro `tipo` à URL de ação do formulário
    let mes = document.getElementById("mes").value;
    //document.getElementById('formMes').action = `/data/${mes}`;
  
    // Submete o formulário manualmente
    document.getElementById('formMes').submit();
});