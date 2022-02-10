//* API de dog.ceo
const BASE_URL = "https://dog.ceo/api";

//* URL host
const valores = window.location.search;
let letter = valores[valores.length - 1];

//* función obtener letra seleccionada
const catchLetter = (Letter) => {

  //* fetch para traer la data de la API
  fetch(`${BASE_URL}/breeds/list/all`)
    .then((response) => response.json())
    .then((data) => {
      breedInicial(data.message);
    });

  //* Listamos la raza de perros seleccionados
  let breedInicial = (Breed) => {
    let dogBreed = Object.keys(Breed);
    let result = dogBreed.filter(
      (breedFirstLetter) => breedFirstLetter[0] == Letter
    );
    
  //* Insertar Lista de Razas
  let searchLetter = document.getElementById("list_breeds_dog");
    searchLetter.innerHTML = `${result
      .map(function (breed) {
        return `<a href="../photo-breed/photo-breed.html?letter=${Letter}&breed=${breed}">${breed}</a>`;
      })
      .join(`<br>`)}`;
  };
};

//* Inicializa la función
catchLetter(letter);
