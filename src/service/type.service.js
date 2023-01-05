class TypeService {

    constructor(typeRepository) {
        this.typeRepository = typeRepository; 
    }

    async getAll() {
        const types = await this.typeRepository.findAll();
        return types.map(type => type.name);
    }

    async getOne(type) {
        return this.typeRepository.findOne(type);
    }

    async save(type) {
        return this.typeRepository.create(type);
    }
}

module.exports = TypeService;