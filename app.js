import express from 'express';
const app = express();

import router  from './routes.js';


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

export default app;