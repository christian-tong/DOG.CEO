//* API de dog.ceo
const BASE_URL = "https://dog.ceo/api";

//* URL host
const valores = window.location.search;
let breed = valores.slice(16, valores.length);
let valorbeforePage = valores.slice(8, 9);

//* función obtener raza seleccionada
const catchImage = (breed) => {

  //* fetch para traer la data de la API
  fetch(`${BASE_URL}/breed/${breed}/images/random`)
    .then((response) => response.json())
    .then((data) => {
      mostrarImagen(data.message);
    });
};

//* Mostrar imagen raza de perros seleccionada
const mostrarImagen = (breed) => {
  document.getElementById("images_breeds_dog").innerHTML = `
    <div class="slide" style="background-image: url('${breed}')"></div>
    `;
};

//* Retorno a la página de selección de raza
const beforePage = (nameBreed) => {
  document.getElementById("beforePage").innerHTML = `
  <a href="../breeds/breeds.html?letter=${nameBreed}" class="button text-color"><-Página Anterior</a>`;
};

//* Inicializa la función
catchImage(breed);
beforePage(valorbeforePage);
