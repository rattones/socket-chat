import React, { useState, useEffect } from 'react';

import { Form, Button }  from 'react-bootstrap'

import api from '../services/api';
import axios from 'axios';

export default function Login() {

  const [ email, setEmail ]= useState('');
  const [ uid, setUid ]= useState('');

  useEffect(()=>{
    async function loadUserEmail() {
      const sessUid= await localStorage.getItem('uid');

      console.log(sessUid);

      if (sessUid === '') {
        // console.log('vazio');
        return false;
      }

      const response = await axios.get(`http://chat.marceloratton.com/user/${sessUid}`);

      console.log(response.data);
    }

    loadUserEmail();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(email)

    // const response = await axios.post('http://chat.marceloratton.com/auth', { params: { "email": 'rattones@gmail.com' }})
    const response = await api.post('/auth', { email: "rattones@gmail.com" } );
        
    console.log(response);
  }

  return (
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
  );
}
