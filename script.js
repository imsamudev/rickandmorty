let apiURL = "https://rickandmortyapi.com/api/character/";

async function getCharacters() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    displayCharacters(data.results);
    apiURL = data.info.next;
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayCharacters(characters) {
  const characterList = document.getElementById("character-list");
  characters.forEach((character) => {
    const card = document.createElement("div");
    card.className = "character-card";
    card.innerHTML = `
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}">
      <p>${character.species}</p>
    `;
    characterList.appendChild(card);
  });
}

getCharacters();

document.getElementById("load-more").addEventListener("click", getCharacters);
