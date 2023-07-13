/*
const inputUser = document.querySelector('.username') as HTMLInputElement;
const inputEmail = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const repeatPassword = document.querySelector('.password2') as HTMLInputElement;
const form = document.querySelector('.form') as HTMLFormElement;
import validator from 'validator';

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
  checkClassList();
});

const verifyInputUser = (user: string): void => {
  const span = inputUser.nextElementSibling as HTMLSpanElement;
  if (user.length < 3 || user.length > 25) {
    span.style.display = 'block';
    inputUser.parentElement?.classList.add('show-error-message');
    span.textContent = 'O usuário deve conter entre 3 a 25 caracteres';
    return;
  }
  inputUser.parentElement?.classList.remove('show-error-message');
  span.style.display = 'none';
};

const verifyInputEmail = (): void => {
  const span = inputEmail.nextElementSibling as HTMLSpanElement;
  if (!validator.isEmail(inputEmail.value)) {
    span.style.display = 'block';
    inputEmail.parentElement?.classList.add('show-error-message');
    span.textContent = 'Email inválido';
    return;
  }
  inputEmail.parentElement?.classList.remove('show-error-message');
  span.style.display = 'none';
};

const verifyInputPassword = (password1: string): void => {
  const span = password.nextElementSibling as HTMLSpanElement;
  if (password1.length < 6 || password1.length > 50) {
    span.style.display = 'block';
    password.parentElement?.classList.add('show-error-message');
    span.textContent = 'A senha deve conter entre 6 e 50 caracteres';
    return;
  }
  password.parentElement?.classList.remove('show-error-message');
  span.style.display = 'none';
};

const repeatInputPassword = (password: string): void => {
  const span = repeatPassword.nextElementSibling as HTMLSpanElement;
  if (password !== repeatPassword.value) {
    repeatPassword.parentElement?.classList.add('show-error-message');
    span.style.display = 'block';
    span.textContent = 'Senhas não coincidem';
    return;
  }
  repeatPassword.parentElement?.classList.remove('show-error-message');
  span.style.display = 'none';
};

const checkClassList = (): void => {
  const takeClass = form.querySelectorAll('.show-error-message');
  if (takeClass.length <= 0) {
    console.log('Enviado com sucesso');
    return;
  } else {
    alert('Preencha todos os campos corretamente');
  }
};

*/
