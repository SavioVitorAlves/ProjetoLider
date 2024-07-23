/*botao 01*/
    document.getElementById("btn-01").addEventListener("click", function() {
        var button = document.getElementById("btn-01");
        var randomColor = '#fff' ; // Gera uma cor aleatória em hexadecimal
        button.style.backgroundColor = 'rgb(255, 152, 55)';
    });

    document.getElementById("btn-01").addEventListener("click", function(){
    var button = document.getElementById("btn-02");
        button.style.backgroundColor = 'rgb(221, 207, 187)'
    });
    document.getElementById("btn-01").addEventListener("click", function(){
        var button = document.getElementById("btn-03");
            button.style.backgroundColor = 'rgb(221, 207, 187)'
    });
    document.getElementById("btn-01").addEventListener("click", function(){
        var button = document.getElementById("btn-04");
            button.style.backgroundColor = 'rgb(221, 207, 187)'
    });
/*botao 02*/
    document.getElementById("btn-02").addEventListener("click", function() {
        var button = document.getElementById("btn-02");
        var randomColor = '#fff' ; // Gera uma cor aleatória em hexadecimal
        button.style.backgroundColor = 'rgb(255, 152, 55)';
    });
    document.getElementById("btn-02").addEventListener("click", function(){
        var button = document.getElementById("btn-01");
        button.style.backgroundColor = 'rgb(221, 207, 187)'
    });
    document.getElementById("btn-02").addEventListener("click", function(){
        var button = document.getElementById("btn-03");
        button.style.backgroundColor = 'rgb(221, 207, 187)'
    });
    document.getElementById("btn-02").addEventListener("click", function(){
        var button = document.getElementById("btn-04");
        button.style.backgroundColor = 'rgb(221, 207, 187)'
    });
/*botao 03*/
    document.getElementById("btn-03").addEventListener("click", function() {
        var button = document.getElementById("btn-03");
        var randomColor = '#fff' ; // Gera uma cor aleatória em hexadecimal
        button.style.backgroundColor = 'rgb(255, 152, 55)';
    });
    document.getElementById("btn-03").addEventListener("click", function(){
        var button = document.getElementById("btn-01");
        button.style.backgroundColor = 'rgb(221, 207, 187)'
    });
    document.getElementById("btn-03").addEventListener("click", function(){
        var button = document.getElementById("btn-02");
        button.style.backgroundColor = 'rgb(221, 207, 187)'
    });
    document.getElementById("btn-03").addEventListener("click", function(){
        var button = document.getElementById("btn-04");
        button.style.backgroundColor = 'rgb(221, 207, 187)'
    });
/*botao 04*/
    document.getElementById("btn-04").addEventListener("click", function() {
        var button = document.getElementById("btn-04");
        var randomColor = '#fff' ; 
        button.style.backgroundColor = 'rgb(255, 152, 55)';
    });
    document.getElementById("btn-04").addEventListener("click", function(){
        var button = document.getElementById("btn-01");
        button.style.backgroundColor = 'rgb(221, 207, 187)'
    });
    document.getElementById("btn-04").addEventListener("click", function(){
        var button = document.getElementById("btn-02");
        button.style.backgroundColor = 'rgb(221, 207, 187)'
    });
    document.getElementById("btn-04").addEventListener("click", function(){
        var button = document.getElementById("btn-03");
        button.style.backgroundColor = 'rgb(221, 207, 187)'
    });
    
    
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
    }
    function ponto() {
        var char = document.getElementById("valor").value.length;
        
        if (char == 2) {
            document.getElementById("valor").value = document.getElementById("valor").value + ".";
    
        }
    }