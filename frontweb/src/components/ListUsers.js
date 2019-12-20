import React, { useState, useEffect } from 'react';

import { ListGroup } from 'react-bootstrap'

import api from '../services/api';

export default function ListUsers() {

    const [ list, setList ]= useState([]);

    useEffect(()=>{
        async function getLoggedUsers() {
            const response= await api.get('/user');

            console.log(response);

            setList(response);
        }

        getLoggedUsers();
    }, [])

    return (
        <>
            <h3>Usuários Online</h3>
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