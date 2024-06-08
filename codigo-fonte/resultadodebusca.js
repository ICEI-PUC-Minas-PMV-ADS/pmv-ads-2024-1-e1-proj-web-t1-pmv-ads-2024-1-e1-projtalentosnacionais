document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
    const filter = document.getElementById('filter').value;
    const results = document.querySelectorAll('.result-item');

    results.forEach(result => {
        const resultText = result.textContent.toLowerCase();
        const resultCategory = result.getAttribute('data-category');
        
        if ((resultText.includes(searchInput) || searchInput === '') && 
            (resultCategory === filter || filter === 'all')) {
            result.style.display = 'block';
        } else {
            result.style.display = 'none';
        }
    });
});

document.getElementById('filter').addEventListener('change', function() {
    const filter = this.value;
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
    const results = document.querySelectorAll('.result-item');

    results.forEach(result => {
        const resultText = result.textContent.toLowerCase();
        const resultCategory = result.getAttribute('data-category');
        
        if ((resultText.includes(searchInput) || searchInput === '') && 
            (resultCategory === filter || filter === 'all')) {
            result.style.display = 'block';
        } else {
            result.style.display = 'none';
        }
    });
    <a class="inicio" href="/index/index.html">INICIO</a>
});
