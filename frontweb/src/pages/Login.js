import React, { useState, useEffect } from 'react';

import { Form, Button, Alert }  from 'react-bootstrap'

import api from '../services/api';
import axios from 'axios';

export default function Login({ history }) {

  const [ show, setShow ]= useState(false);
  const [ email, setEmail ]= useState('');

  useEffect(( history )=>{
    async function loadUserEmail() {
      const sessUid= await localStorage.getItem('uid');

      console.log(sessUid);

      if (sessUid === null) {
        // console.log('vazio');
        return false;
      }

      const response = await axios.get(`http://chat.marceloratton.com/user/${sessUid}`);

      if (response.length === 0) {
        setShow(true);
        return false;
      }

      history.push('/chat');
    }

    loadUserEmail();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/auth', { email } );

    if (response.length === 0) {
      setShow(true);
      return false;
    }
        
    await localStorage.setItem('uid', response[0].uid);
    history.push('/chat')
  }


  return (
    <div>
      <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
        Email não encontrado
      </Alert>        
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="seuemail@host.com" 
            onChange={event => setEmail(event.target.value)}
          />
          <Form.Text className="text-muted">
            Entre com seu email de cadastro
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
    </div>
  );
}
