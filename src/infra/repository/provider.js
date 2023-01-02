const PokemonModel = require('../models/pokemon.model');

const PokemonRepository = require('./pokemon.repository');
const TypeRepository = require('./type.repository');

const pokemonRepository = new PokemonRepository(PokemonModel);
const typeRepository = new TypeRepository();

module.exports = { pokemonRepository,typeRepository };