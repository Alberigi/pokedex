const PokemonRepository = require('./pokemon.repository');
const TypeRepository = require('./type.repository');

const pokemonRepository = new PokemonRepository();
const typeRepository = new TypeRepository();

module.exports = { pokemonRepository,typeRepository };