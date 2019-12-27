import React, { useState } from 'react';

import { Form, Button } from 'react-bootstrap'

import api from '../services/api';

export default function Login({ history }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/user', {name, email} );

        // console.log(response); 
        // jquery -> axios não funcionou aqui

        if (response.length === 0) {
            return false;
        }

        history.push("/");
    }

    function handleLogin(event) {
        event.preventDefault();

        history.push('/login');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control type="text" required placeholder="Nome Sobrenome"
                    onChange={event => setName(event.target.value)}
                />
                <Form.Text className="text-muted">
                    Entre com o Nome pelo qual deseja ser chamado
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" required placeholder="seuemail@host.com"
                    onChange={event => setEmail(event.target.value)}
                />
                <Form.Text className="text-muted">
                    Entre com seu email de cadastro
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Cadastrar
            </Button>&nbsp;&nbsp;
            <Button variant="primary" type="submit" onClick={handleLogin}>
                Logar
            </Button>
        </Form>
    );
}
