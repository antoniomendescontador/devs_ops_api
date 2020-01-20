const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://tony:74965812@cluster0-idvrc.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);


//Métodos http: GET, POST, PUT E DELETE

//Tipos de Parâmetros
//Query Params: request.query(filtro, ordenação, paginação, ...)
//Route Params: request.params (identificar um recurso na alteração ou deleção)
//Body: request.body (dados para criação ou alteração de um registro)
//MongoDB (não relacional)


app.listen(3333);