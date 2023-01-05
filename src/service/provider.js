const PokemonService = require('./pokemon.service');
const PokemonValidator = require('./pokemon.validator');
const TypeService = require('./type.service');

const  {pokemonRepository, typeRepository} = require('../infra/repository/provider');

const typeService = new TypeService(typeRepository);
const pokemonValidator = new PokemonValidator(pokemonRepository, typeService);
const pokemonService = new PokemonService(pokemonRepository, pokemonValidator);

module.exports = { pokemonService, typeService };
