import React, { Component } from 'react'
import styled from 'styled-components';
import ChatBubble from './ChatBubble';

const Messages = styled.div`
    text-align: left;
    height:100%;
    margin: 80px auto;
    overFlow: auto;
`;

export class List extends Component {
    scrollToBottom(){
        // this.messagesEnd.scrollIntoView({behavior: "smooth"});
        window.scrollTo(0,document.body.scrollHeight);
    }

    componentDidMount(){
        this.scrollToBottom();
        window.addEventListener('online', this.handleConnectionChange);
        window.addEventListener('offline', this.handleConnectionChange);
    }

    componentDidUpdate(){
        this.scrollToBottom();
    }
    
    handleConnectionChange(){
        if (!navigator.onLine){
            document.querySelector('#offline').style.display = "block"
        } else{
            document.querySelector('#offline').style.display = "none"
        }
    }
    render() {
        return (
            <Messages ref={(el) => {this.container = el}}>
                {this.props.messages.map((message, index) => (
                    <ChatBubble key={index} position={message.position}>
                        {message.content}
                    </ChatBubble>
                ))}
                <div className="end" ref={(el) => { this.messagesEnd = el }} />
            </Messages>
        )
    }
}

export default List
