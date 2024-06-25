document.addEventListener('DOMContentLoaded', function() {
    // Recuperar a lista de usuários do localStorage
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Selecionar o elemento onde os dados serão exibidos
    var usuariosList = document.getElementById('usuariosList');

    // Função para contar o número de ocorrências de um elemento em uma lista
    function countOccurrences(arr, val) {
        return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    }

    // Mapear os nomes dos usuários
    var nomes = usuarios.map(function(user) { return user.nome; });

    // Filtrar nomes únicos
    var nomesUnicos = nomes.filter(function(nome, index, self) {
        return self.indexOf(nome) === index;
    });

    // Exibir os dados de cada usuário
    nomesUnicos.forEach(function(nome) {
        var user = usuarios.find(u => u.nome === nome);
        var userDiv = document.createElement('div');
        userDiv.classList.add('usuario-item');
        userDiv.innerHTML = `<p><strong>Nome:</strong> ${nome} <strong>Idade:</strong> ${user.idade}`;
        
        if (user.visitas > 1) {
            userDiv.innerHTML += ` <span>(Visitou ${user.visitas} vezes)</span>`;
        }
        
        userDiv.innerHTML += `</p>`;
        usuariosList.appendChild(userDiv);
    });
});
