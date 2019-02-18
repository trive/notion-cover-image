import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import State from './State';
import Constants from './Constants';
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
					<CoverImageContent src={this.props.imagePath}
									   style={interpolatingStyle}/>
				}
			</Motion>
		);
	}
}

export default CoverImage;