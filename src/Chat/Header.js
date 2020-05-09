import React, { Component } from 'react'
import styled from 'styled-components'

const Nav = styled.div`
  border: 1px solid #383838;
  width : 100%;
  position: fixed;
  top: 0px;
  background: #D3D3D3;
  height: 50px;
  z-index: 3;
`;

const NavItem = styled.div`
  border: 1px solid #383838;
  width : 32%;
  line-height: 50px;
  display: inline-block;
  height: 50px;
`;

export class Header extends Component {
    render() {
        return (
            <Nav>
                <NavItem> Chat </NavItem>
                <NavItem> My Jobs </NavItem>
                <NavItem> Profile </NavItem>
                <div id="offline">Looks like you have disconnected from the network</div>
            </Nav>
        )
    }
}

export default Header
