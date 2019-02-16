import React, { Component } from 'react';
import State from './State';
import Constants from './Constants';
import image from './images/picker/test.jpg';
import rebound from 'rebound';
import styled from 'styled-components';


const CoverImageContainer = styled.div`
  overflow: hidden;
`

const CoverImageContent = styled.img`
  width: 100%;
  //position: relative;
  //top: 25%;
  transform: translateY(-25%);
`

class CoverImage extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = { style : { height : '0px' }};
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
                 .mapValueInRange(val, 0, 1, 0, 200);
    this.setState( {
      style : { 'height' : val + 'px' }
    });
  }

  render() {
    this.spring.setEndValue(this.props.showCoverImage ? 0 : 1);
    return (
      <CoverImageContainer showCoverImage={this.props.showCoverImage} style={this.state.style}>;
        <CoverImageContent src={image} />
      </CoverImageContainer>
    );
  }
}

export default CoverImage;