const express = require('express');
const { dbConnection } = require('../../infra/config/provider');
const {typeService} = require('../../service/provider');
const router = express.Router();

router.get('/getTypes', async (_, res) => {
    try {
        await dbConnection.startConnection();
        const result = await typeService.getAll();
        return res.send(result);
    } catch (erro) {
        console.log(erro);
        return res.status(500).send(erro);
    } finally {
        dbConnection.endConnection();
    }
});

router.post('/saveType', async (req, res) => {
    try {
        await dbConnection.startConnection();
        const result = await typeService.save(req.body);
        return res.send(result);
    } catch (erro) {
        console.log(erro);
        return res.status(400).send({message: erro.message});
    } finally {
        dbConnection.endConnection();
    }
});

module.exports = app => app.use('/', router);