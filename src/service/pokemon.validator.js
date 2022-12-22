class PokemonValidator {

    constructor(pokemonRepository, typeRepository) {
        this.pokemonRepository = pokemonRepository; 
        this.typeRepository = typeRepository; 
    }

    validateSave(pokemon) { 
        this.checkProps(pokemon);
        this.checkExist(pokemon.name);
        this.checkType(pokemon.type);
    }

    validateUpdate(indetification, data) {
        this.checkIndetification(indetification);
        this.checkProps(data);
        this.checkType(data.type);
        if (indetification !== data.name) this.checkExist(data.name)
    }

    checkExist(name) {
        const result = this.pokemonRepository.findOne(name);
        if(result) throw Error(`${name} already exists in pokedex`);
    }

    checkIndetification(indetification) {
        const result = this.pokemonRepository.findOne(indetification);
        if(!result) throw Error(`${indetification} not exists in pokedex`);
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