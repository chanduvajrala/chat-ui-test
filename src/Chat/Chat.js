import React, { Component } from 'react'
import styled from 'styled-components';

import List from './List'
import Input from './Input'
import Camera from './Camera'

const ChatDiv = styled.div`
    background: orange;
    position: relative;
    height: 100%;
    margin-top: 50px;
`;

export class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: this.props.messages
        }
    }

    addMessage = (content, position) =>{
        let messages = this.state.messages;
        messages.push({content, position}); 
        this.setState({messages});
        localStorage.setItem('messages', JSON.stringify(messages))
    }

    render() {
        return (
            <div>
                <ChatDiv>
                    <List messages = {this.state.messages}/>
                    <div className= "footer">
                        <Input add={this.addMessage}/>
                        <Camera/>
                    </div>
                </ChatDiv>
            </div>
        )
    }
}

export default Chat
