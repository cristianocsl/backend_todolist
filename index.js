const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const root = require('./api/controllers/root');
const handleError = require('./api/middlewares/error');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/', root);

app.use(handleError);

const { PORT } = process.env || 3001;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
