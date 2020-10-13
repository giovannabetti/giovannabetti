import express, { response } from 'express';

const app = express();

// Rotate = conjunto
// Recurso = usuario

// Metodos HTTPS = GET, POST, PUT, DELETE
// Parametros

// GET = buscar uma informação (lista, item)
// POST = criando uma informação
//PUT = Editando uma informação
// DELETE = Deletando uma informação

app.get('/users', (req, res) => {
    return response.json({ message: 'Hello World' }); 
});

app.listen(3333);