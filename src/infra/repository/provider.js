const PokemonModel = require('../models/pokemon.model');
const TypeModel = require('../models/type.model');

const PokemonRepository = require('./pokemon.repository');
const TypeRepository = require('./type.repository');

const pokemonRepository = new PokemonRepository(PokemonModel);
const typeRepository = new TypeRepository(TypeModel);

module.exports = { pokemonRepository,typeRepository };