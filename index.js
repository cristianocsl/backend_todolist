const express = require('express');
const bodyParser = require('body-parser');
const root = require('./api/controllers/root');
const handleError = require('./api/middlewares/error');

const app = express();

app.use(bodyParser.json());

app.use('/', root);

app.use(handleError);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
