import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import Constants from './Constants';
import State from './State';
import styled from 'styled-components';


/* Styled Components */

const PopupSectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 11px;
`

const PopupSectionTitle = styled.div`
	text-transform: uppercase;
	font-size: 12px;
	padding-bottom: 10px;
	padding-left: -3px;
`

const PopupSectionGrid = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 0 -2.5px;
`

const PopupImage = styled.img`
	height: 59px;
	margin: 0 2.5px;
	margin-bottom: 5px;
	border-radius: 10px;
	flex: 1 0 26%;
	object-fit: cover;
	object-position: 50% 50%;
`

/* Component */

class PopupSection extends Component {
	
	handleClickOnAddCover = (e) => {
		this.handleOut(e);
		this.props.addCoverHandler(e);
		State.isShowingPopup = !State.isShowingPopup;
	}

	render() {
		var Images = Constants.Numbers.map((number) =>
			<PopupImage key={number.toString()}
						src={require(Constants.PickerPath + this.props.descriptor + "/" + number.toString() + '.png')}/>)
		return (
			<PopupSectionContainer>
				<PopupSectionTitle>{this.props.descriptor}</PopupSectionTitle>
				<PopupSectionGrid>
					{Images}
				</PopupSectionGrid>
			</PopupSectionContainer>
		);
	}
}

export default PopupSection;