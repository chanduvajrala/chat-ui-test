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
        width: 10%;
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
        this.props.add(this.input.innerText, 'right');
        this.props.add("Pardon my ignorance. I am just a dummy.", 'left');
        this.input.innerText = '';
    }
    
    enter = (e) => {
        if(e.key === 'Enter'){
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
                    <div className="action">
                        <a href="#" onClick={this.submit}>Send</a>
                    </div>
                </RightPanel>
            </Container>
        )
    }
}


export default Input
