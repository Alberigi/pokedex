const express = require('express');
const cors = require('cors');

const app = express();

app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    app.use(cors());
    next();
});

app.use(express.json());


require('./controller/pokemon.controller')(app);
require('./controller/types.controller')(app);

module.exports = app;