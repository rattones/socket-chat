import React, { useState, useEffect } from 'react';

import { Container, Row, Col, InputGroup, FormControl, Button, Form }  from 'react-bootstrap'

import api from '../services/api';

import ListUsers from '../components/ListUsers';
import ChatRoll from '../components/ChatRoll';

export default function Chat({ history }) {

    const [ message, setMessage ]= useState('');
    const [ user, setUser ]= useState({});

    useEffect(()=>{
        async function getUserData() {            
            const sessUid= await localStorage.getItem('uid');
            const response= await api.get(`/user/${sessUid}`);

            setUser(response[0]);
        }

        getUserData();

        // console.log(user);
    }, []);

    async function handleSendMessage(event) {
        event.preventDefault();

        await api.post('/msg', {user, message});

        setMessage('');
    }

    async function handleCloseChat(event) {
        event.preventDefault();

        await localStorage.removeItem('uid');

        history.push('/');
    }

    async function handleDeleteUser(event) {
        event.preventDefault();

        await api.post('/deleteUser', { uid: user.uid });

        handleCloseChat(event);
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs={8}><ChatRoll /></Col>
                    <Col xs={4}><ListUsers /></Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="formBasicEmail">
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>{user.name}</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Escreva aqui a sua mensgaaem"
                                    aria-label="Mensagem"
                                    aria-describedby="basic-addon2"
                                    value={message}
                                    onChange={event => setMessage(event.target.value)}
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" onClick={handleSendMessage}>Enviar</Button>
                                </InputGroup.Append>
                            </InputGroup>     
                        </Form.Group>                   
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={handleCloseChat}>Sair</Button>&nbsp;&nbsp;
                        <Button variant="danger" onClick={handleDeleteUser}>Descastrar</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}