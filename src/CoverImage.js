import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import State from './State';
import Constants from './Constants';
import image from './images/picker/test.jpg';
import styled from 'styled-components';


const CoverImageContainer = styled.div`
  overflow: hidden;
  z-index: ${Constants.zCoverImage};
`

const CoverImageContent = styled.img`
  width: 100%;
  transform: translateY(-25%);
`

class CoverImage extends Component {
  render() {
  	var maskHeight = spring(this.props.showCoverImage ? Constants.CoverImageHeight : 0, Constants.SpringParameters);
    return (
    	<Motion style={{height: maskHeight}}>
			{interpolatingStyle =>
				<CoverImageContainer style={interpolatingStyle}>
        			<CoverImageContent src={image} />
				</CoverImageContainer>}
		</Motion>
    );
  }
}

export default CoverImage;