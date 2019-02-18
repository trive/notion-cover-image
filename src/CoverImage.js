import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import State from './State';
import Constants from './Constants';
import image from './images/picker/test.jpg';
import styled from 'styled-components';

const CoverImageContent = styled.img`
	width:100%;
	object-fit: cover;
	object-position: 50% 50%;
	z-index: ${Constants.zCoverImage};
`

class CoverImage extends Component {
	render() {
		var maskHeight = spring(this.props.showCoverImage ? Constants.CoverImageHeight : 0, Constants.SpringParameters);
		return (
			<Motion style={{height: maskHeight}}>
				{interpolatingStyle =>
					<CoverImageContent src={image}
									   style={interpolatingStyle}/>
				}
			</Motion>
		);
	}
}

export default CoverImage;