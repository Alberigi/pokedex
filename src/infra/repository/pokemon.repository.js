class PokemonRepository {
    _pokemonModel = {};

  constructor(pokemonModel) {
    this._pokemonModel = pokemonModel;
  }

  async findAll() {
    return this._pokemonModel.find();
  }

  async findOne(name) { 
    return this._pokemonModel.findOne({name});
  }

  async create(pokemon) {
    const result = await this._pokemonModel.create(pokemon);
    return result.save();
  }

  async remove(name) { 
    return this._pokemonModel.deleteOne({name});
  }

  async update(indetification,data) {
    return this._pokemonModel.findOneAndUpdate({ name: indetification }, data);
  }
}

module.exports = PokemonRepository;