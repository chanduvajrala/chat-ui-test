import React, { Component } from 'react'
import styled from 'styled-components';

const RightPanel = styled.div`
    .text{
        float: left;
        text-align: left;
        width: 90%;
    }
    .send{
        float: left;
        width: 8%;
        text-align: center;
    }
    .input{
        padding : 10px;
        background-color: grey;
        max-height: 50px;
        overflow: auto;
        border-radius: 5px;
    }
`;

const Container = styled.div`
  padding: 5px;
  width: 100%;
  position: fixed;
  bottom :0px;
`;

export class Input extends Component {

    submit = () => {
        if(this.input.innerText.trim() !== ''){
            this.props.add(this.input.innerText, 'right');
            this.props.add("Pardon my ignorance. I am just a dummy.", 'left');
            this.input.innerText = '';
        }
    }
    
    enter = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            this.submit();
        }
    }

    render() {
        return (
            <Container>
                <RightPanel>
                    <div className="text">
                        <div className="input" ref={this.props.innerRef}>
                            <div id="textarea" contentEditable="true" ref={(el) => { this.input = el }} onKeyDown={this.enter}></div>
                        </div>
                    </div>
                    <div className="send">
                        {/* <a href="#" onClick={this.submit}>Send</a> */}
                        <button className = "sendButton" onClick={this.submit}>Send</button>
                    </div>
                    
                </RightPanel>
            </Container>
        )
    }
}


export default Input
