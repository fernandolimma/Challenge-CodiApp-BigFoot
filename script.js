
function fazerLogin() {
  const usuario = document.querySelector('input[type="text"]').value;
  const senha = document.querySelector('input[type="password"]').value;
   
  if (usuario.trim() === "" || senha.trim() === "") {
    alert("Por favor, preencha o usuário e a senha!");
    return;
  }
  console.log(`Usuário: ${usuario}, Senha: ${senha}`);
}

   const loginButton = document.querySelector('button');
loginButton.addEventListener('click', fazerLogin);
