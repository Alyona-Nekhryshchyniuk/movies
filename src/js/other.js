const genresStr = document.querySelector('.film-card-genre ');
const card = document.querySelector('.film-card');
const dateSpan = document.querySelector('.production-date');
const otherSpan = document.querySelector('.other');
const pattern = document.createElement('span');
pattern.classList.add('pattern');

let genres = 'Drama, H, Thriller, Documentary, Sci-fi, Advanture,';
let wordArray = genres.split(' ').filter(part => part !== '' && part !== '\n');
let spaceForGenres =
  card.offsetWidth - (dateSpan.offsetWidth + otherSpan.offsetWidth);
let ind = [];
console.log(spaceForGenres);
export const addOther = () => {
  for (let i = 0; i < 7; i += 1) {
    pattern.innerHTML = wordArray[i];
    card.appendChild(pattern);
    spaceForGenres -= pattern.offsetWidth;
    console.log(spaceForGenres);
    if (spaceForGenres < 20) {
      break;
    }
    ind.push(i);
  }
  console.log(ind[ind.length - 1]);
  genresStr.innerHTML = wordArray.slice(0, ind[ind.length - 1]).join(' ');
};
