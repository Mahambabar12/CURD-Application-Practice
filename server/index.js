import express from "express";
import  dotenv from 'dotenv';
import cors from 'cors';
import Routes from './routes/route.js';
import bodyParser from "body-parser";

import connection from "./database/db.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors())

app.use('/', Routes)


const PORT = 8000;

const Username =process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection (Username,password);

app.listen(PORT, () => console.log('server is running successfully on PORT ${PORT}'));