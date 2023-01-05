class TypeService {

    constructor(typeRepository) {
        this.typeRepository = typeRepository; 
    }

    async getAll() {
        return this.typeRepository.findAll();
    }

    async getOne(type) {
        return this.typeRepository.findOne(type);
    }

    async save(type) {
        return this.typeRepository.create(type);
    }
}

module.exports = TypeService;