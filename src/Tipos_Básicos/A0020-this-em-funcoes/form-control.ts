import isEmail from 'validator/lib/isEmail';

/* FEITO PELO PROFESSOR */
const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

// Quem for o this no local onde você estiver definindo a arrow function é o this da arrow function e isso não pode ser alterado

// O this é o que está setado quando você criou a função. Por exemplo, se você usar arrow function dentro de uma classe, o this é a própria classe.

// Então sempre pega o escopo "acima" de onde está a função. Se estiver dentro da classe o escopo é a classe, se estiver "solto" o escopo é o global.

// O this em arrow function é o event.target (ESCOPO GLOBAL)
const submitEventFn = (event: Event) => {
  event.preventDefault();
  // Pegando o this em arrow function
  const target = event.target as HTMLFormElement;

  hideErrorMessages(target);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(target)) console.log('FORMULÁRIO ENVIADO');
};

form.addEventListener('submit', submitEventFn);

// Checando campos vazios
function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'campo não pode ficar vazio');
  });
}

// Checando Email
function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

// Checando Passwords
function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value.length < 6 || password.value.length > 50) {
    showErrorMessage(password, 'A senha deve ter entre 6 a 50 caracteres');
    showErrorMessage(password2, 'A senha deve ter entre 6 a 50 caracteres');
  }
  if (password !== password2) {
    showErrorMessage(password, 'Senhas não coincidem');
    showErrorMessage(password2, 'Senhas não coincidem');
  }
}

// Selecionando todas as classes dentro do FORM e tirando a mensagem de error
function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGES}`)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

// Exibindo mensagem de erro
function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.textContent = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

// Checando se tem erros no FORM
function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGES}`)
    .forEach(() => (send = false));
  return send;
}
