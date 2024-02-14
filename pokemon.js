const MAX_POKEMON = 151;
const listWrapper = document.querySelector(".list-wrapper");
const searchInput = document.querySelector("#search-input");
const numberFilter = document.querySelector("#number");
const nameFilter = document.querySelector("#name");
const notFoundMessage = document.querySelector("#not-found-message");

let allPokemon = [];

fetch(`https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`)
  .then((reponse) => reponse.json())
  .then((data) => {
    allPokemon = data.results;
    console.log(data);
    console.log(data.results);
    console.log(data.results[0]);
    console.log(data.results[0].url); //36:12 in the youtube video
  });
