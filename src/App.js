import React, { Component } from 'react';
import Constants from './Constants';
import State from './State';
import Popup from './Popup';
import NavBar from './NavBar';
import AddBar from './AddBar';
import CoverImage from './CoverImage';
import rebound from 'rebound';
import logo from './images/share.svg';
import './reset.css';
import styled from 'styled-components';


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
  color: ${Constants.StandardGray};
  padding-top: 39px;
  padding-left: 26px;
`
const Logo = styled.img`
  width: 150px;
  margin: 0 auto;
  display: block; // to make centering work
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: {overlayOpacity};
`

/* App */

class App extends Component {

  constructor(props) {
    super(props);
    // State
    this.state = {
      isShowingPopup : false,
      hasCoverImage : false,
      overlayOpacity : 0.0,
      style : { transform : 'scale3d(1,1,1)' }
    }
    // Setup spring
    this.spring = new rebound.Spring();
    this.springSystem = new rebound.SpringSystem();
    this.spring = this.springSystem.createSpring(Constants.SpringTension, Constants.SpringFriction);
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
    this.setState({
      isShowingPopup : !this.state.isShowingPopup
    })
  }

  render() {
    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    console.debug(width);
    console.debug(height);
    return (
      <StyledApp>
        <NavBar />
        <CoverImage showCoverImage={this.state.isShowingPopup || this.state.hasCoverImage} />
        <AddBar addCoverHandler={this.handleClickOnAddCover} />
        <Content>Travel List</Content>
        <Popup />
        <Overlay />
      </StyledApp>
    );
  }
}

export default App;
