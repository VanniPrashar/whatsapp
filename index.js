import express from 'express';

import Connection from './database/db.js';
import Routes from './routes/Routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully om PORT ${PORT}`));

app.use(bodyParser.json({ extends: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/', Routes);



