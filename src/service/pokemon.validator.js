class PokemonValidator {

    constructor(pokemonRepository, typeRepository) {
        this.pokemonRepository = pokemonRepository; 
        this.typeRepository = typeRepository; 
    }

    validateSave(pokemon) { 
        this.checkProps(pokemon);
        this.checkExist(pokemon);
        this.checkType(pokemon.type);
    }

    checkExist(pokemon) {
        const result = this.pokemonRepository.findOne(pokemon.name);
        if(result) throw Error(`${pokemon.name} already exists in pokedex`);
    }
    
    checkType(type) {
        const result = this.typeRepository.findOne(type);
        if(!result) throw Error(`Type of pokemon: ${type} not exists`);
    }
    
    checkProps(pokemon) { 
        Object.keys(pokemon).forEach((key) => {
        if (!pokemon[key]) throw Error(`Field ${key} is empty`);
        });
    }
}

module.exports = PokemonValidator;