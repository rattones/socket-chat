const express = require('express');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const routes= require('./routes')

const { User } = require('./src/models');

app.use(cors());         // permite o acesso externo a api
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.use((req, res, next)=> {
    req.io= io;
    next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

http.listen(3333);