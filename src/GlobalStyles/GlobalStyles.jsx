import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: whitesmoke;
    font-family: Arial, sans-serif;
    margin: 0;
  }

  ul, li {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  :root {
    --pokeFont: 'Pokemon Solid', sans-serif;
    --redLight: rgb(239, 83, 80);
    --oswald-font: 'Oswald', sans-serif;
    --patua-font: 'Patua One', cursive;
    --raleway-font: 'Raleway', sans-serif;
    --roboto-font: 'Roboto', sans-serif;
    --rusoOne-font: 'Russo One', sans-serif;
    --ubuntu-font: 'Ubuntu', sans-serif;

    /* Colores de fondo tipos */
    --Normal: #A8A878;
    --Fire: #F08030;
    --Water: #6890F0;
    --Electric: #F8D030;
    --Grass: #78C850;
    --Ice: #98D8D8;
    --Fighting: #C03028;
    --Poison: #A040A0;
    --Ground: #E0C068;
    --Flying: #A890F0;
    --Psychic: #F85888;
    --Bug: #A8B820;
    --Rock: #B8A038;
    --Ghost: #705898;
    --Dragon: #7038F8;
    --Dark: #705848;
    --Steel: #B8B8D0;
    --Fairy: #EE99AC;

  }
`;

export default GlobalStyles;