const express = require('express');
const {pokemonService} = require('../../service/provider');
const router = express.Router();

router.get('/getPokemons', async (_, res) => {
    try {
        const result = await pokemonService.getAll();
        return res.send(result);
    } catch (erro) {
        console.log(erro);
        return res.send(erro);
    }
});

router.get('/getTypes', async (_, res) => {
    try {
        const result = await pokemonService.getTypes();
        return res.send(result);
    } catch (erro) {
        console.log(erro);
        return res.status(500).send(erro);
    }
});

router.post('/savePokemon', async (req, res) => {
    try {
        const result = await pokemonService.save(req.body);
        return res.send(result);
    } catch (erro) {
        console.log(erro);
        return res.status(400).send({message: erro.message});
    }
});

router.post('/deletePokemon', async (req, res) => {
    try {
        const result = await pokemonService.delete(req.body.name);
        return res.send(result);
    } catch (erro) {
        console.log(erro);
        return res.status(400).send({message: erro.message});
    }
});

router.post('/updatePokemon', async (req, res) => {
    try {
        const result = await pokemonService.update(req.body.indetification, req.body.data);
        return res.send(result);
    } catch (erro) {
        console.log(erro);
        return res.status(400).send({message: erro.message});
    }
});

module.exports = app => app.use('/', router);