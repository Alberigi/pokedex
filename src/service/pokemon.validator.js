class PokemonValidator {

    constructor(pokemonRepository, typeRepository) {
        this.pokemonRepository = pokemonRepository; 
        this.typeRepository = typeRepository; 
    }

    async validateSave(pokemon) { 
        this.checkProps(pokemon);
        await this.checkExist(pokemon.name);
        this.checkType(pokemon.type);
    }

    async validateUpdate(indetification, data) {
        await this.checkIndetification(indetification);
        this.checkProps(data);
        this.checkType(data.type);
        if (indetification !== data.name) this.checkExist(data.name)
    }

    async checkExist(name) {
        const result = await this.pokemonRepository.findOne(name);
        if(result) throw Error(`${name} already exists in pokedex`);
    }

    async checkIndetification(indetification) {
        const result = await this.pokemonRepository.findOne(indetification);
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