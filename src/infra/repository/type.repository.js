class TypeRepository {
  _types = [
    'steel',
    'fire',
    'grass' ,
    'electric' ,
    'water' ,
    'ice' ,
    'ground' ,
    'rock' ,
    'fairy' ,
    'poison'  ,
    'bug'  ,
    'dragon' ,
    'psychic' ,
    'flying' ,
    'fighting' ,
    'normal' ,
  ];

  findAll() {
    return this._types;
  }

  findOne(type) {
    return this._types.find(t => t === type);
  }
}

module.exports = TypeRepository;