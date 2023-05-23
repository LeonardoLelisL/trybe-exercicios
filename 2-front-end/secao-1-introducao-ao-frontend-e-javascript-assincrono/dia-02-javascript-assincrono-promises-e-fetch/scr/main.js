import Swal from 'sweetalert2';

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const ACCESS_TOKEN = '10227780804243463';
const BASE_URL = `https://superheroapi.com/api.php/${ACCESS_TOKEN}`;
const MAX_HEROES = 1000;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomId();

  fetch(`${BASE_URL}/${id}`)
  .then((result) => result.json())
  .then((data) => {
    img.src = data.image.url;
    name.innerHTML = data.name;
  });
});