import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import Constants from './Constants';
import State from './State';
import styled from 'styled-components';
var images = require.context('./images', true);


/* Styled Components */

const PopupSectionContainer = styled.div`
	display: flex;
	flex-direction: 'column';
`

const PopupSectionTitle = styled.div`
	text-transform: uppercase;
`

const PopupSectionGrid = styled.div`
	display: flex;
	flex-direction: 'row';
	flex-wrap: wrap;
`

const PopupImageContainer = styled.div`
	padding-left: 2.5px;
	padding-right: 2.5px;
	//padding-top: 53%;
    min-width: 111px;
`

const PopupImage = styled.img`
	//transform: translateY(-25%);
	max-width: 100%;
    max-height: 100%;
`

/* Component */

class PopupSection extends Component {

	constructor(props) {
		super(props);
	}

	handleClickOnAddCover = (e) => {
		this.handleOut(e);
		this.props.addCoverHandler(e);
		State.isShowingPopup = !State.isShowingPopup;
	}

	render() {
		var src = images(`./${this.props.descriptor}/test.jpg`);
		return (
			<PopupSectionContainer>
				<PopupSectionTitle />
				<PopupSectionGrid>
					<PopupImageContainer>
						<PopupImage src={src}/>
					</PopupImageContainer>
					<PopupImageContainer>
						<PopupImage src={src}/>
					</PopupImageContainer>
					<PopupImageContainer>
						<PopupImage src={src}/>
					</PopupImageContainer>
					<PopupImageContainer>
						<PopupImage src={src}/>
					</PopupImageContainer>
					<PopupImageContainer>
						<PopupImage src={src}/>
					</PopupImageContainer>
				</PopupSectionGrid>
			</PopupSectionContainer>
		);
	}
}

export default PopupSection;