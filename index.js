//npm i dotenv
require('dotenv').config();

const express = require('express');

//npm i cors 
const cors = require('cors');

const { dbConnection } = require('./database/config');

//Crear el servidor express
const app = express();

//Base de Datos
dbConnection();

// CORS
app.use( cors() );

//Rutas
app.get( '/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })
} );

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});