import React, { Component } from 'react'
import styled from 'styled-components';

import List from './List'
import Input from './Input'

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
    }

    render() {
        return (
            <div>
                <ChatDiv>
                    <List messages = {this.state.messages}/>
                    <Input add={this.addMessage}/>
                </ChatDiv>
            </div>
        )
    }
}

export default Chat
