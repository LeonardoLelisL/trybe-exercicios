const h1 = document.createElement('h1');
h1.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(h1);

const mainContent = document.createElement('main');
mainContent.className = 'main-content';
document.body.appendChild(mainContent);

const centerContent = document.createElement('section');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

const p = document.createElement('p');
p.innerText = 'Algum texto.';
centerContent.appendChild(p);

const leftContent = document.createElement('section');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

const rightContent = document.createElement('section');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

const image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
leftContent.appendChild(image);

const ul = document.createElement('ul');
const number = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let value of number) {
  let lista = document.createElement('li');
  lista.innerText = value;
  ul.appendChild(lista);
}
rightContent.appendChild(ul);

for (let index = 0; index < 3; index += 1) {
  const h3 = document.createElement('h3');
  mainContent.appendChild(h3);
}

h1.className = 'title';