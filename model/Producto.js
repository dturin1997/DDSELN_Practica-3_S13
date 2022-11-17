const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productoSchema = new Schema({
    nombre: { type: String },
    imagen: { type: String },
    stock: { type: Number },
    precio: { type: Number },
    descripcion: { type: String },
    descuento: { type: Number },
});

module.exports = mongoose.model("productos", productoSchema);