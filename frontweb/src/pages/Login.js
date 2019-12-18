import React, { useState, useEffect } from 'react';

import { Form, Button }  from 'react-bootstrap'

import api from '../services/api';

export default function Login() {

  const [ email, setEmail ]= useState('');
  const [ uid, setUid ]= useState('');

  useEffect(()=>{
    async function loadUserEmail() {
      const uid= localStorage.getItem('uid');
      const response= await api.get('/user', { header: {uid } });

      console.log(response);
    }

    loadUserEmail();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    console.log(email);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
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
  );
}
