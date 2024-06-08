
document.getElementById('save-button').addEventListener('click', function() {
    const formacao = document.getElementById('formacao-input').value.trim();
    const curso = document.getElementById('curso-input').value.trim();
    const instituicao = document.getElementById('instituicao-input').value.trim();
    const inicio = document.getElementById('inicio-input').value.trim();
    const fim = document.getElementById('fim-input').value.trim();
    const modalidade = document.getElementById('modalidade-input').value.trim();
    const cursoExtra = document.getElementById('curso-extra-input').value.trim();
    const nivel = document.getElementById('nivel-input').value.trim();

    const missingFields = [];

    if (!formacao) missingFields.push('Formação');
    if (!curso) missingFields.push('Curso');
    if (!instituicao) missingFields.push('Instituição');
    if (!inicio) missingFields.push('Data de Início');
    if (!fim) missingFields.push('Data de Fim');
    if (!modalidade) missingFields.push('Modalidade');
    if (!cursoExtra) missingFields.push('Curso Extra');
    if (!nivel) missingFields.push('Nível');

    if (missingFields.length > 0) {
        alert(`Por favor, preencha os seguintes campos:\n${missingFields.join(', ')}`);
        return;
    }

    const portfolioElements = document.querySelectorAll('.portfolio-row .add-button-square');
    const portfolioData = [];
    portfolioElements.forEach((element, index) => {
        portfolioData.push(`Portfólio Item ${index + 1}`);
    });

    const userInfo = {
        formacao,
        curso,
        instituicao,
        inicio,
        fim,
        modalidade,
        cursoExtra,
        nivel,
        portfolioData
    };

    console.log('Dados do usuário:', userInfo);
    alert('Dados salvos com sucesso! Confira no console.');
    <a class="inicio" href="/index/index.html">INICIO</a>
});
