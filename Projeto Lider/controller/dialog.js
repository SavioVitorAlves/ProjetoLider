const button = document.querySelector("button");
const modal = document.getElementById('modal');
const buttonSend = document.getElementById('enviar');
const buttonCancell = document.getElementById('cancell');

button.onclick = function (){
    modal.showModal();
}
buttonSend.onclick = function (){
    const nome = document.getElementById('username').value;
    const email = document.getElementById('useremail').value;
    const tell = document.getElementById('userphone').value;
    const msg = document.getElementById('usermsg').value;
    console.log(nome);
    console.log(email);
    console.log(tell);
    console.log(msg);

   
    modal.close();
    alert("Sua Mensagem Foi Enviada! Obrigado pelo contado, em brave entraremos em contato com você pelo numero adicionado!");
}
buttonCancell.onclick = function (){
    modal.close();
}