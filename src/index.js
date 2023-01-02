const genresStr = document.querySelector('.film-card-genre ');
const card = document.querySelector('.film-card');
const dateSpan = document.querySelector('.production-date');
const otherSpan = document.querySelector('.other');
const pattern = document.createElement('span');
pattern.classList.add('pattern');
let gens = 'Drama, Horrow, Thriller, Documentary, Sci-fi, Advanture,';

let wordArray = gens.split(' ').filter(part => part !== '' && part !== '\n');

let availableSpace =
  card.offsetWidth - (dateSpan.offsetWidth + otherSpan.offsetWidth);

let ind = [];
let w;
for (let i = 0; i < 7; i += 1) {
  pattern.innerHTML = wordArray[i];
  card.appendChild(pattern);

  availableSpace -= pattern.offsetWidth;

  ind.push(i);
  if (availableSpace < 30) {
    break;
  }
}

let last = ind.length - 1;

genresStr.innerHTML = wordArray.slice(0, last).join(' ');
