import React, { Component } from 'react';
import Constants from './Constants';
import camera from './images/camera.svg';
import search from './images/search.svg';
import styled from 'styled-components';


/* Styled Components */

const PopupHeaderContainer = styled.div`
	height: 62px;
	display: flex;
	flex-direction: 'row';
	flex-grow: 1;
	padding-left: 5px;
	padding-right: 5px;
`

const PopUpHeaderIcon = styled.img`
	margin: 9px;
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