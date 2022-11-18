function convertPokemonLi(pokemon) {
  return `
  <ol class="pokemons">
  <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
    <div class="details">
      <ol class="types">
        <li class="type">Grass</li>
        <li class="type">Poison</li>
      </ol>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        alt="${pokemon.name}"
      />
    </div>
  </li>
</ol>
  `;
}

const pokemonList = document.getElementById("pokemonList");
pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonLi).join("");
});
