document.getElementById('loginBtn').addEventListener('click', function() {
    var nome = document.getElementById('nome').value.trim();
    var idade = document.getElementById('idade').value.trim();

    // Verificar se os campos não estão em branco
    if (nome === '' || idade === '') {
        alert('Por favor, preencha todos os campos para fazer login.');
        return;
    }

    // Recuperar a lista de usuários do localStorage, ou inicializar uma lista vazia
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar se o nome já existe na lista
    var usuarioExistente = usuarios.find(function(user) {
        return user.nome === nome;
    });

    if (usuarioExistente) {
        // Incrementar o contador de visitas do usuário existente
        usuarioExistente.visitas = (usuarioExistente.visitas || 1) + 1;
    } else {
        // Adicionar o novo usuário à lista
        usuarios.push({ nome: nome, idade: idade, visitas: 1 });
    }

    // Armazenar a lista atualizada no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Redirecionar para a página perfil.html
    window.location.href = 'perfil.html';
});
