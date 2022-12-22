class PokemonService {

    constructor(pokemonRepository, pokemonValidator, typeRepository) {
        this.pokemonRepository = pokemonRepository; 
        this.pokemonValidator = pokemonValidator; 
        this.typeRepository = typeRepository; 
    }
    
    getAll() {
        return this.pokemonRepository.findAll();
    }

    save(pokemon) {
        this.pokemonValidator.validateSave(pokemon);
        return this.pokemonRepository.create(pokemon);
    }

    getTypes() {
        return this.typeRepository.findAll();
    }

    delete(name) {
       return this.pokemonRepository.remove(name);
    }
}

module.exports = PokemonService;