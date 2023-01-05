class PokemonValidator {

    constructor(pokemonRepository, typeService) {
        this.pokemonRepository = pokemonRepository; 
        this.typeService = typeService; 
    }

    async validateSave(pokemon) { 
        this.checkProps(pokemon);
        await this.checkExist(pokemon.name);
        await this.checkType(pokemon.type);
    }

    async validateUpdate(indetification, data) {
        await this.checkIndetification(indetification);
        this.checkProps(data);
        await this.checkType(data.type);
        if (indetification.toLowerCase() !== data.name.toLowerCase()) this.checkExist(data.name)
    }

    async checkExist(name) {
        const result = await this.pokemonRepository.findOne(name);
        if(result) throw Error(`${name} already exists in pokedex`);
    }

    async checkIndetification(indetification) {
        const result = await this.pokemonRepository.findOne(indetification);
        if(!result) throw Error(`${indetification} not exists in pokedex`);
    }
    
    async checkType(type) {
        const result = await this.typeService.findOne(type);
        if(!result) throw Error(`Type of pokemon: ${type} not exists`);
    }
    
    checkProps(pokemon) { 
        Object.keys(pokemon).forEach((key) => {
        if (!pokemon[key]) throw Error(`Field ${key} is empty`);
        });
    }
}

module.exports = PokemonValidator;