//import express from "express";
//import { generateUploadURL } from "./s3.js";

const express = require('express');
const generateUploadURL = require('./s3.js');

const db = require('./db')

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

const contactos = require('./routes/productos');
app.use(contactos)

app.get('/', (req, res) => {
    res.send('hola mundo')
});

app.get("/s3Url", async (req, res) => {
    const url = await generateUploadURL.generateUploadURL();
    res.send({ url });
});

app.listen(8080, () => {
    console.log('¡Server UP! en http://localhost:8080');
});