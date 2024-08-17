const button = document.getElementById("usuario");
const modal = document.getElementById('modal');
const buttonCancell = document.getElementById('cancell');

button.onclick = function (){
    modal.showModal();
    fetch(`/user`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(dados => {
        let userModal = document.getElementById("userModal");
        userModal.innerHTML = ''; // Limpa o conteúdo anterior

        dados.forEach(user => {
            let itemDiv = document.createElement('div');
            itemDiv.innerHTML = `
                <div id="${user.id}" class="item">
                    <p class="id">${user.id}</p>
                    <p class="desc">${user.nome.trim()}</p>
                    <p class="val">${user.senha}</p>
                    <a href="#" class="deleteuser" data-id="${user.id}"><span class="material-symbols-outlined" style="font-size: 20px; cursor: pointer;" id="delete">delete</span></a> 
                </div>
            `;
            userModal.appendChild(itemDiv);
        });
        
        document.querySelectorAll('.deleteuser').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = this.dataset.id;
                console.log(itemId);
                
                fetch(`/deleteUser/${itemId}`, {
                    method: 'DELETE'
                })
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error);
                    } else {
                        alert(data.message);
                        document.getElementById(itemId).remove();
                    }
                })
                .catch(error => console.error('Erro ao deletar o item:', error));
            });
        });
    })
    .catch(error => console.error('Erro ao carregar os usuários:', error));
}
buttonCancell.onclick = function (){
    modal.close();
}

  
