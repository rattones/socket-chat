const express = require('express');
const cors = require('cors');

const app = express();

const routes= require('./routes')

const { User } = require('./src/models');

app.use(cors());         // permite o acesso externo a api
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);