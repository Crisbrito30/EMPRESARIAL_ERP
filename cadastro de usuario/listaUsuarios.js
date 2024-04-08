document.addEventListener("DOMContentLoaded", function () {
    const listaUsuarios = document.getElementById("listaUsuarios");
  
    // Obter a lista de usuários do armazenamento local
    const listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");
  
    // Exibir cada usuário na lista
    listaUser.forEach((usuario) => {
      const li = document.createElement("li");
      li.textContent = `Nome: ${usuario.nomeCad}, Usuário: ${usuario.userCad}, Senha: ${usuario.senhaCad}`;
      listaUsuarios.appendChild(li);
    });
  });
  