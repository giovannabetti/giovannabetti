import express, { response } from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
    return response.json({ message: 'Hello World' }); 
});

app.listen(3333);

// Rotate = conjunto
// Recurso = usuario

// Metodos HTTPS = GET, POST, PUT, DELETE
// Parametros

// GET = buscar uma informação (lista, item)
// POST = criando uma informação
//PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users/1 (Identificar um recurso)

// Existem três fomras de lidar com banco de dados em uma aplicação pelo backend:
// Driver nativo - podemos utilizar o sqlite3, por exemplo. Permite executar as queries do BD direto pelo node, mas não oferece nenhuma abstração: sqlite3.query('SELECT * FROM users')
// Query builder (knex.js) - a gente escreve nossas queries com js: knex('users).select('*').where('name', 'Diego')
// no final, ele converte isso para SELECT * FROM USERS where NAME... É um construtor de queries.
// ORM: teremos uma classe do js que simboliza uma tabela no BD. Então, para cada tabela dentro do banco de dados, vamos ter uma classe dentro da aplicação.
// Object Relational Mapping

// users_spec
// User

// 3 users
// User User User