import React from 'react';
import camera from './images/camera.svg';
import search from './images/search.svg';
import styled from 'styled-components';


/* Styled Components */

const PopupHeaderContainer = styled.div`
	min-height: 56px;
	max-height: 56px;
	display: flex;
	flex-direction: row;
	padding-left: 16px;
	padding-right: 16px;
`

const PopUpHeaderIcon = styled.img`
`

const PopUpHeaderText = styled.div`
	font-weight: 500; //medium
	font-size: 17px;
	flex-grow: 1;
	margin: auto;
	text-align: center;
`

/* Popup */

const PopupHeader = () => (
	<PopupHeaderContainer>
		<PopUpHeaderIcon src={camera} />
		<PopUpHeaderText>Cover Image</PopUpHeaderText>
		<PopUpHeaderIcon src={search} />
	</PopupHeaderContainer>
)

export default PopupHeader;