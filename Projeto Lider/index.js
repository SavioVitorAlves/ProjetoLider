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
    
    const result = document.querySelector('resultado');

    function somavalores(){ 
    document.getElementById("sum").addEventListener("click", function(){
        const somatorio = result.innerText + valor.innerText;
        addDigit(somatorio);
    })
}