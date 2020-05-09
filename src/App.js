import React from 'react';
import './App.css';

import styled from 'styled-components'

import Chat from './Chat/Chat'
import Header from './Chat/Header'

const Container = styled.div`
  width : 100%;
  margin: 0px auto;
  background: orange;
`;

const messages = [
  {position : 'left', content: 'Content of the Message Left'},
  {position : 'right', content: 'Content of the Message Right'}
]

const chatMessages = () => {
  let localMessages = localStorage.getItem("messages");
  if(localMessages){
    var chatMessages = JSON.parse(localMessages);
    return chatMessages;
  } else return chatMessages = messages;  
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Chat messages={chatMessages()}/>
      </Container>
    </div>
  );
}

export default App;
