const express = require('express');
const mongosse = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongosse.connect('mongodb://localhost:27017/nodeapi',{
    useUnifiedTopology: true,
    useNewUrlParser: true,

});

requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
