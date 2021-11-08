// PokeAPI
const pokeBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/';

// get the container
const myContainer = document.querySelector('#container');

// add the poke sprites
for (let i = 1; i <= 151; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('pokemon');

    // the image
    const newSprite = document.createElement('img');
    newSprite.src = `${pokeBaseUrl}${i}.png`;
    newDiv.appendChild(newSprite);

    // the span
    const newSpan = document.createElement('span');
    newSpan.innerText = `#${i}`;
    newDiv.appendChild(newSpan);

    // add the elements
    myContainer.appendChild(newDiv);
}