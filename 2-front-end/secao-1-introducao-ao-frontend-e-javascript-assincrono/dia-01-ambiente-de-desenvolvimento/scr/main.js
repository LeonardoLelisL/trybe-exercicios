import validator from 'validator';

const inputValue = document.querySelector('#value');
const button = document.querySelector('#button');
const option = document.querySelector('#option');
const answer = document.querySelector('#answer');

const UUID_VERSION = 4;

button.addEventListener('click', (event) => {
  event.preventDefault();

  const fields = {
    cpf: validator.isTaxID(inputValue.value, 'pt-BR'),
    hexColor: validator.isHexColor(inputValue.value),
    email: validator.isEmail(inputValue.value),
    uuid: validator.isUUID(inputValue.value, UUID_VERSION),
    url: validator.isURL(inputValue.value),
  };

  answer.innerHTML = `A validação retornou ${fields[option.value]}`;
});
