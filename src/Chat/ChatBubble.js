import React, { Component } from 'react'
import styled from "styled-components";

const ChatBubble = styled.div`
    position: relative;
    ${props => props.position === "left" && `{
		margin-right: 50%;
        float: left;
	`} 
  
  ${props => props.position === "right" && `{
    > span {
      float: right;
	  margin-right: 0;
      text-align: right;
      margin-left: 50%;
    }
	`};
`;

const Text = styled.span`
  display: inline-block;
  border-radius: 5px;
  padding: 10px;
  position: relative;
  margin-top: 10px;
  height: 50px;
  max-width: 500px;
  background : #F6F6F6;
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

