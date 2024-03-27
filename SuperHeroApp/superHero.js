const newHeroDiv = document.getElementById("NewHero");
const heroImgDiv = document.getElementById("heroImg");
const searchDiv = document.getElementById("Search");
const searchBtnDiv = document.getElementById("SearchBtn");
const nameDiv = document.getElementById(name);
const token = 10223569763528853;
const base_url = `https://superheroapi.com/api.php/${token}`;

const getSuperHero = (id) => {
  fetch(`https://superheroapi.com/api.php/10223569763528853/${id}`)
    .then((response) => response.json())
    .then((json) => {
      const superHero = json;
      showHeroInfo(superHero);
    });
};

const statToEmoji = {
  intelligence: "🧠",
  strength: "💪",
  speed: "⚡️",
  durability: "🏋️‍♂️",
  power: "🔋",
  combat: "⚔️",
};

const showHeroInfo = (character) => {
  const img = `<img src ="${character.image.url}" height=300 width=300/>"`;

  const name = `<h2>${character.name}</h2>`;

  const stats = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${
        character.powerstats[stat]
      }</p>`;
    })
    .join("");

  heroImgDiv.innerHTML = `${name}${img}${stats}`;
};

const randomHero = () => {
  const numberOfHeroes = 731;
  return Math.floor(Math.random() * numberOfHeroes) + 1;
};
newHeroDiv.onclick = () => getSuperHero(randomHero());

const getSearchHero = (name) => {
  fetch(`https://superheroapi.com/api.php/10223569763528853/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      showHeroInfo(hero);
    });
};

searchBtnDiv.onclick = () => getSearchHero(searchDiv.value);
