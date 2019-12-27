import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
import socket from '../services/socket';

import { ListGroup } from 'react-bootstrap'

import api from '../services/api';

export default function ListUsers() {

    const [ list, setList ]= useState([]);

    useEffect(()=>{
        async function getLoggedUsers() {
            const response= await api.get('/user');

            // console.log(response);

            // setList(response.data); // axios
            setList(response); // jquery
        }

        getLoggedUsers();

        // socket.on('emitUserList', ()=> {
        //     getLoggedUsers();
        // }) // mudar para usuário online

    }, [])

    return (
        <>
            <h3>Usuários</h3>
            <ListGroup variant="flush">
            {list.map(
                    user=>(
                        <ListGroup.Item key={user.uid}>{user.name}</ListGroup.Item>
                    )
            )}
            </ListGroup>
        </>
    );
}