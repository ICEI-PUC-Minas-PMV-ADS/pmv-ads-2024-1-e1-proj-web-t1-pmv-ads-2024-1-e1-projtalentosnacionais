
document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username'); 
    const welcomeMessage = document.querySelector('h1');
    const btnVoltar = document.getElementById('btn-voltar');
    const form = document.querySelector('form');
    const searchInput = document.getElementById('busca'); 

    usernameInput.addEventListener('input', function() {
        welcomeMessage.textContent = `Olá, ${usernameInput.value}`;
    });
  
    btnVoltar.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "/home/home.html";
    });
 
    form.addEventListener('submit', function(event) {
        if (searchInput.value.trim() === "") {
            event.preventDefault();
            alert("Por favor, digite algo para buscar.");
        }
    });
});
