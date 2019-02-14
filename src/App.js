import React, { Component } from 'react';
import Constants from './Constants';
import State from './State';
import Popup from './Popup';
import NavBar from './NavBar';
import AddBar from './AddBar';
import rebound from 'rebound';
import styled from 'styled-components';
import logo from './images/share.svg';


/* Styled Components */

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${Constants.StandardGray};
`

const Content = styled.p`
  font-weight: bold;
  font-size: 32pt;
  color: ${Constants.LightGray};
  padding-top: 39px;
  padding-left: 26px;
`
const Logo = styled.img`
  width: 150px;
  margin: 0 auto;
  display: block; // to make centering work
`


/* App */

class App extends Component {

  constructor(props) {
    super(props);
    // State
    this.state = {
      isShowingPopup : false,
      hasCoverImage : false,
      style : { transform : 'scale3d(1,1,1)' }
    }
    // Setup spring
    this.spring = new rebound.Spring();
    this.springSystem = new rebound.SpringSystem();
    this.spring = this.springSystem.createSpring(300, 20);
    this.spring.addListener({
      onSpringUpdate: this.handleSpringUpdate
    });
  }

  // Spring
  handleSpringUpdate = (spring) => {
    var val = spring.getCurrentValue();
    val = rebound.MathUtil
                 .mapValueInRange(val, 0, 1, 1, 0.5);
    this.setState( {
      style : { transform : 'scale3d(' + val + ', ' + val + ', 1)' }
    });
  }

  // Mouse events
  handleClickOnLogo = (e) => {
    console.debug('Click');
  }
  handleMouseDown = (e) => {
    console.debug('Down');
    this.spring.setEndValue(1);
  }
  handleMouseUp = (e) => {
    console.debug('Up');
    this.spring.setEndValue(0);
  }

  handleClickOnAddCover = (e) => {
    console.debug('Click on add cover')
  }

  render() {
    return (
      <StyledApp>
        <NavBar />
        <AddBar addCoverHandler={this.handleClickOnAddCover} />
        <Content>Untitled</Content>

        <Logo
          src={logo}
          alt="Logo test"
          style={this.state.style}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}>
        </Logo>
        <Popup />
      </StyledApp>
    );
  }
}

export default App;
