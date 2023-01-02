class PokemonService {

    constructor(pokemonRepository, pokemonValidator, typeRepository) {
        this.pokemonRepository = pokemonRepository; 
        this.pokemonValidator = pokemonValidator; 
        this.typeRepository = typeRepository; 
    }
    
    async getAll() {
        return this.pokemonRepository.findAll();
    }

    async save(pokemon) {
        await this.pokemonValidator.validateSave(pokemon);
        return this.pokemonRepository.create(pokemon);
    }

    async getTypes() {
        return this.typeRepository.findAll();
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