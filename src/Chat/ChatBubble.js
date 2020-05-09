import React, { Component } from 'react'
import styled from "styled-components";

const ChatBubble = styled.div`
    position: relative;
    ${props => props.position === "left" && `{
		    margin: 0px 50% 0px 1%;
        background: #f0f3f6;
        float: left;
        border-radius: 5px;
	`} 
  
  ${props => props.position === "right" && `{
    > span {
      float: right;
	    margin: 0px 1% 10px 50%;
      text-align: right;
      background: #f9eab5;
    }
	`};
`;

const Text = styled.span`
  display: inline-block;
  border-radius: 5px;
  padding: 10px;
  position: relative;
  max-width: 500px;
`;


export default class extends Component {
    render() {
        return (
            <ChatBubble {...this.props}>
                <Text>
                    {this.props.children}
                </Text>
            </ChatBubble>
        )
    }
}

