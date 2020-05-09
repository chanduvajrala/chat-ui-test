import React from 'react';
import './App.css';

import styled from 'styled-components'

import Chat from './Chat/Chat'
import Header from './Chat/Header'

const Container = styled.div`
  border: 1px solid #383838;
  width : 100%;
  margin: 0px auto;
  background: orange;
`;

const chatMessages = [
  {position : 'left', content: 'Content of the Message Left'},
  {position : 'right', content: 'Content of the Message Right'}
]

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Chat messages={chatMessages}/>
      </Container>
    </div>
  );
}

export default App;
