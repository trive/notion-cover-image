import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import Constants from './Constants';
import styled from 'styled-components';

const CoverImageContent = styled.img`
	width:100%;
	object-fit: cover;
	object-position: 50% 50%;
	z-index: ${Constants.zCoverImage};
`

class CoverImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHighlighted : false
		}
	}

	highlight = () => {
		console.debug('mouse down on cover image');
		this.setState({
			isHighlighted : true
		})
	}

	dehighlight = () => {
		console.debug('mouse up on cover image');
		this.setState({
			isHighlighted : false
		})
	}

	render() {
		var maskHeight = spring(this.props.showCoverImage ? Constants.CoverImageHeight : 0, Constants.SpringParameters);
		var filterValue = spring(this.state.isHighlighted ? Constants.OverlayDarken : 1.0, Constants.SpringParameters);
		return (
			<Motion style={{height: maskHeight, filter: filterValue}}>
				{value =>
					<CoverImageContent src={this.props.imagePath}
									   style={{height: value.height,
									   		   filter: `brightness(${value.filter})`}}
									   onClick={this.props.onClick}
									   onMouseDown={this.highlight}
									   onMouseUp={this.dehighlight}/>
				}
			</Motion>
		);
	}
}

export default CoverImage;