const loginButton = document.querySelector('.button-login');
loginButton.addEventListener('click', fazerLogin);

function fazerLogin() {
  const usuario = document.querySelector('input[type="text"]').value;
  const senha = document.querySelector('input[type="password"]').value;
   
  if (usuario.trim() === "" || senha.trim() === "") {
    alert("Por favor, preencha o usuário e a senha!");
    return;
  }
  console.log(`Usuário: ${usuario}, Senha: ${senha}`);
}

   
const buttonMobile = document.querySelector('.button-mobile')
const body = document.querySelector('body')

buttonMobile.addEventListener('click', () => {
 body.classList.add('show')
})

const buttonClose = document.querySelector('.close-mobile')

buttonClose.addEventListener('click', () => {
  body.classList.remove('show')
})


function closeMobile() {
  body.classList.remove('show')
}