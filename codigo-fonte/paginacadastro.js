// Função para validar os campos do formulário
function validarCampos(nome, email, username, password, confirmarSenha) {
    if (!nome) {
        return 'Por favor, preencha o nome completo.';
    }
    if (!email) {
        return 'Por favor, preencha o e-mail.';
    }
    if (!username) {
        return 'Por favor, preencha o nome de usuário.';
    }
    if (!password) {
        return 'Por favor, preencha a senha.';
    }
    if (!confirmarSenha) {
        return 'Por favor, confirme a senha.';
    }
    if (password !== confirmarSenha) {
        return 'As senhas não coincidem.';
    }
    return ''; // Retorna uma string vazia se todas as validações passarem
}

// Função para lidar com o envio do formulário
function handleSubmit(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('Nome').value.trim();
    const email = document.getElementById('Email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmarSenha = document.getElementById('ConfirmarSenha').value.trim();

    // Valida os campos
    const mensagemErro = validarCampos(nome, email, username, password, confirmarSenha);
    if (mensagemErro) {
        alert(mensagemErro);
        return;
    }

    // Se todas as validações passarem, o formulário pode ser enviado
    alert('Cadastro realizado com sucesso!');
    // Aqui você pode enviar o formulário usando AJAX ou simplesmente:
    // document.querySelector('form').submit();
}

// Adiciona o evento de submit ao formulário
document.querySelector('form').addEventListener('submit', handleSubmit);
