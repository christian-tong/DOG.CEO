//* Función listar abecedario
const listSelectLetter = () => {

  //* Creamos la función donde conseguimos las letras del abecedario A-Z
  const ABC = () => {
    let abc = "";
    for (let i = 97; i <= 122; i++) {
      let letra = String.fromCharCode(i);
      let MAYUS = letra.toUpperCase();
      abc += `<a href="../breeds/breeds.html?letter=${letra}" id=${MAYUS} class="ed-item form__item">${MAYUS}</a>`;
      // abc += `<a onclick="catchLetter('${letra}')" href="../breeds/breeds.html" id=${MAYUS} class="ed-item form__item">${MAYUS}</a>`;
    }
    return abc;
  };

  //* Insertamos abecedario
  let searchLetter = document.getElementById("select_dog_letter");
  searchLetter.innerHTML = `${ABC()}
 `;
};

//* Inicializa la función
listSelectLetter();
