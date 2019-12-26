const express = require('express');
const cors = require('cors');

const routes= require('./routes');

const app = express();

app.use(cors());         // permite o acesso externo a api
app.use(express.json()); // usar formato json 
// app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3010);