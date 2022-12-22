class PokemonRepository {
  _pokemonsList = [];

  findAll() {
    return this._pokemonsList;
  }

  findOne(name) { 
    return this._pokemonsList.find(p => p.name === name);
  }

  create(pokemon) {
    this._pokemonsList.push(pokemon);
    return this.findOne(pokemon.name);
  }

  remove(name) { 
    const pokemon = this._pokemonsList.find(p => p.name === name);
    const index = this._pokemonsList.indexOf(pokemon);
    this._pokemonsList.splice(index, 1)
    return pokemon;
  }

  update(indetification,data) {
    const pokemon = this._pokemonsList.find(p => p.name === indetification);
    const index = this._pokemonsList.indexOf(pokemon);
    this._pokemonsList.splice(index, 1, data)
    return data;
  }
}

module.exports = PokemonRepository;