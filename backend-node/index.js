const express = require('express');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const routes= require('./routes')

const { User } = require('./src/models');

app.use((req, res, next)=> {
  // console.log('req', req);
    req.io= io;
    next();
});

app.use(cors());         // permite o acesso externo a api
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

http.listen(3333);