import React, { Component } from 'react';
import Constants from './Constants';
import camera from './images/camera.svg';
import search from './images/search.svg';
import styled from 'styled-components';


/* Styled Components */

const PopupHeaderContainer = styled.div`
	min-height: 62px;
	max-height: 62px;
	display: flex;
	flex-direction: row;
	padding-left: 11px;
	padding-right: 11px;
`

const PopUpHeaderIcon = styled.img`
`

const PopUpHeaderText = styled.div`
	font-weight: 500; //medium
	font-size: 20px;
	flex-grow: 1;
	margin: auto;
	text-align: center;
`

/* Popup */

class PopupHeader extends Component {

	render() {
		return (
			<PopupHeaderContainer>
				<PopUpHeaderIcon src={camera} />
				<PopUpHeaderText>Cover Image</PopUpHeaderText>
				<PopUpHeaderIcon src={search} />
			</PopupHeaderContainer>
		);
	}
}

export default PopupHeader;