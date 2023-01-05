const express = require('express');
const { dbConnection } = require('../../infra/config/provider');
const {pokemonService} = require('../../service/provider');
const router = express.Router();

router.get('/getPokemons', async (_, res) => {
    try {
        await dbConnection.startConnection();
        const result = await pokemonService.getAll();
        return res.send(result);
    } catch (erro) {
        console.log(erro);
        return res.send(erro);
    } finally {
        dbConnection.endConnection();
    }
});

router.post('/savePokemon', async (req, res) => {
    try {
        await dbConnection.startConnection();
        const result = await pokemonService.save(req.body);
        return res.send(result);
    } catch (erro) {
        console.log(erro);
        return res.status(400).send({message: erro.message});
    } finally {
        dbConnection.endConnection();
    }
});

router.post('/deletePokemon', async (req, res) => {
    try {
        await dbConnection.startConnection();
        const result = await pokemonService.delete(req.body.name);
        return res.send(result);
    } catch (erro) {
        console.log(erro);
        return res.status(400).send({message: erro.message});
    } finally {
        dbConnection.endConnection();
    }
});

router.post('/updatePokemon', async (req, res) => {
    try {
        await dbConnection.startConnection();
        const result = await pokemonService.update(req.body.indetification, req.body.data);
        return res.send(result);
    } catch (erro) {
        console.log(erro);
        return res.status(400).send({message: erro.message});
    } finally {
        dbConnection.endConnection();
    }
});

module.exports = app => app.use('/', router);