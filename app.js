const express = require('express');
const mongoose = require('mongoose');
const path = require ('path')

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs'); 
});

const uridb = "mongodb+srv://agenda:agendaparahector@cluster0.m8mpndb.mongodb.net/?retryWrites=true&w=majority";

mongoose
    .connect(uridb)
    .then(()=> console.log('conectado a mongodb')) 
    .catch(error => console.log('error de conexión', error))



    app.listen(port, () => {
        console.log(`La aplicación está funcionando en http://localhost:${port}`);
    });