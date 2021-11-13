import express from 'express';
import 'dotenv/config';

const app = express();

import './src/database';
import router from './routes';


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

export default app;