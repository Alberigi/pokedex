class TypeRepository {
  _typesModel = [];

  constructor(typesModel) {
    this._typesModel = typesModel;
  }

  async create(type) {
    const result = await this._typesModel.create(type);
    return result.save();
  }

  async findAll() {
    return this._typesModel.find().lean();
  }

  async findOne(name) {
    return this._typesModel.findOne({name}).lean();
  }
}

module.exports = TypeRepository;