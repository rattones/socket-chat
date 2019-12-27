import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
import socket from '../services/socket';

import { ListGroup, Badge } from 'react-bootstrap'

export default function ChatRoll() {

    const [ chat, setChat ]= useState([]);

    useEffect(()=> {
        function getSocketMessages() {
            // const socket= io('http://localhost:3333/');

            socket.on('emitMessage', ({uid, name, message})=> {
                console.log(uid, name, message);

                let item= { name, message };
                chat.push(item);

                setChat(chat);
            })
        }

        getSocketMessages();
    }, [ chat ])

    return (
        <>
            <ListGroup ariant="flush">{chat.map((item, i)=> 
                (<ListGroup.Item key={i}>
                    <Badge variant="secondary">{item.name}</Badge>
                    &nbsp;&nbsp;{item.message}
                </ListGroup.Item>))
            }</ListGroup>
        </>
    );
}