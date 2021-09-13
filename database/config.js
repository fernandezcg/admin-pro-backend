//npm i mongoose
const mongoose = require("mongoose");

const dbConnection = async () => {

    try {
        await mongoose.connect( process.env.DB_CNN );
        console.log('Base de Datos inline');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar Base de Datos');
    }
}

module.exports = {
    dbConnection
}