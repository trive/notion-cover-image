import React, { Component } from 'react';
import Constants from './Constants';
import hamburger from './images/hamburger.svg';
import share from './images/share.svg';
import more from './images/dotdotdot.svg';
import notifications from './images/notifications.svg';
import styled from 'styled-components';


/* Styled Components */

const NavBarContainer = styled.div`
  height: 45px;
  display: flex;
  flex-direction: 'row';
  flex-grow: 1;
`

const NavBarIcon = styled.img`
  //fill: ${Constants.StandardGray};
  padding: 8px;
`

const NavBarText = styled.div`
  font-weight: 500; //medium
  font-size: 14pt;
  flex-grow: 1;
  margin: auto;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  opacity: 15%;
  background-color: #D8D8D8;
  display: block;
`

/* Popup */

class NavBar extends Component {

  render() {
    return (
      <div>
        <NavBarContainer>
          <NavBarIcon src={hamburger} />
          <NavBarText>Travel List</NavBarText>
          <NavBarIcon src={more} />
          <NavBarIcon src={share} />
          <NavBarIcon src={notifications} />
        </NavBarContainer>
        <Divider />
      </div>
    );
  }
}

export default NavBar;