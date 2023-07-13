/*
const inputUser = document.querySelector('.username') as HTMLInputElement;
const inputEmail = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const repeatPassword = document.querySelector('.password2') as HTMLInputElement;
const form = document.querySelector('.form') as HTMLFormElement;
import validator from 'validator';

let formValido: boolean;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (
    !inputUser.value ||
    !password.value ||
    !inputEmail.value ||
    !repeatInputPassword
  )
    return;
  verifyInputUser(inputUser.value);
  verifyInputEmail();
  verifyInputPassword(password.value);
  repeatInputPassword(password.value);

  if (!formValido) return alert('Preencha todos os campos corretamente');

  form.submit();
});

const verifyInputUser = (user: string) => {
  const span = inputUser.nextElementSibling as HTMLSpanElement;
  if (user.length < 3 || user.length > 25) {
    formValido = false;
    span.style.display = 'block';
    span.textContent = 'O usuário deve conter entre 3 a 25 caracteres';
  }
  span.style.display = 'none';
};

const verifyInputEmail = () => {
  const span = inputEmail.nextElementSibling as HTMLSpanElement;
  if (!validator.isEmail(inputEmail.value)) {
    formValido = false;
    span.style.display = 'block';
    span.textContent = 'Email inválido';
    return;
  }
  span.style.display = 'none';
};

const verifyInputPassword = (password1: string) => {
  const span = password.nextElementSibling as HTMLSpanElement;
  if (password1.length < 6 || password1.length > 50) {
    formValido = false;
    span.style.display = 'block';
    span.textContent = 'A senha deve conter entre 6 e 50 caracteres';
    return;
  }
  span.style.display = 'none';
};

const repeatInputPassword = (password: string) => {
  const span = repeatPassword.nextElementSibling as HTMLSpanElement;
  if (password !== repeatPassword.value) {
    formValido = false;
    span.style.display = 'block';
    span.textContent = 'Senhas não coincidem';
    return;
  }
  span.style.display = 'none';
};
*/
