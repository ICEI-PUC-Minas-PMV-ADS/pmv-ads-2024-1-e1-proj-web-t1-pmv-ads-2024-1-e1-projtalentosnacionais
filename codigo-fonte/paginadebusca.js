function performSearch() {
    const query = document.getElementById('search-input').value.trim(); // Obtém o valor de busca e remove espaços em branco extras

    if (query !== '') { // Verifica se a consulta não está vazia
        alert('Você buscou por: ' + query);
        // Aqui você pode adicionar a lógica para realizar a busca real, como redirecionar para uma página de resultados ou atualizar uma seção da página com os resultados
    } else {
        alert('Por favor, insira um termo de busca.'); // Avisa ao usuário se a consulta estiver vazia
    }
}
