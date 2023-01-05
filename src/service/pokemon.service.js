class PokemonService {

    constructor(pokemonRepository, pokemonValidator) {
        this.pokemonRepository = pokemonRepository; 
        this.pokemonValidator = pokemonValidator;      
    }
    
    async getAll() {
        return this.pokemonRepository.findAll();
    }

    async save(pokemon) {
        await this.pokemonValidator.validateSave(pokemon);
        return this.pokemonRepository.create(pokemon);
    }

    async delete(name) {
       return this.pokemonRepository.remove(name);
    }
    
    async update(indetification, data) {
        await this.pokemonValidator.validateUpdate(indetification,data);
        return this.pokemonRepository.update(indetification,data);
    }
}

module.exports = PokemonService;