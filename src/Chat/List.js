import React, { Component } from 'react'
import styled from 'styled-components';
import ChatBubble from './ChatBubble';

const Messages = styled.div`
    text-align: left;
    height:100%;
    overFlow: auto;
`;

export class List extends Component {
    scrollToBottom(){
        this.messagesEnd.scrollIntoView();
    }

    componentDidMount(){
        this.scrollToBottom();
    }

    componentDidUpdate(){
        this.scrollToBottom();
    }
    
    render() {
        return (
            <Messages ref={(el) => {this.container = el}}>
                {this.props.messages.map((message, index) => (
                    <ChatBubble key={index} position={message.position}>
                        {message.content}
                    </ChatBubble>
                ))}
                <div ref={(el) => { this.messagesEnd = el }} />
            </Messages>
        )
    }
}

export default List
