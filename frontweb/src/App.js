import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Socket Chat</h1>
          <p>
            Creating a real time chat with PHP + MySQL + React
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Routes />
      </Container>
    </>
  );
}

export default App;
