// imports
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import todosRoute from './routes/todos.js';
import cors from 'cors';

// variáveis de ambiente
dotenv.config();
const port = process.env.PORT || 3001;
const mongodb = process.env.MONGODB;

// conexão com o banco de dados
mongoose.connect(mongodb).then( () => console.log("mongodb connected") ).catch( err => console.log("mongodb error:", err));

// configuração express
const app = express();
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

// rotas
app.use('/todos', todosRoute);

app.get('/', (req, res) => {
    res.send("Welcome!");
});

export { app as default, mongoose, port };