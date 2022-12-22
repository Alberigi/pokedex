const PokemonService = require('./pokemon.service');
const PokemonValidator = require('./pokemon.validator');

const  {pokemonRepository, typeRepository} = require('../infra/repository/provider');

const pokemonValidator = new PokemonValidator(pokemonRepository, typeRepository);
const pokemonService = new PokemonService(pokemonRepository, pokemonValidator, typeRepository);

module.exports = { pokemonService };
