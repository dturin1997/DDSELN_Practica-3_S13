//import mongoose from "mongoose";
const mongoose = require('mongoose');

const MONGO_USERNAME = 'root';
const MONGO_PASSWORD = 'root';
const MONGO_HOSTNAME = '127.0.0.1';
//const MONGO_PORT = '27017';
//const MONGO_DB = 'ddseln_lab_s9_crud';

//const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
const url =`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.mjsqwcg.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'));
db.once('open', function callback(){
    console.log("¡Conectado a MongoDB!");
});

module.exports = db