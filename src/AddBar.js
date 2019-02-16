import React, { Component } from 'react';
import Constants from './Constants';
import State from './State';
import addicon from './images/add-icon.svg';
import addcover from './images/add-cover.svg';
import adddiscussion from './images/add-discussion.svg';
import styled from 'styled-components';


/* Styled Components */

const AddBarContainer = styled.div`
	display: flex;
	flexDirection: 'row';
	padding-left: 15px;
	padding-top: 13px;
	justify-content: flex-start;
`
const AddBarIcon = styled.img`
`

const AddBarLabel = styled.div`
	color: ${Constants.MidGray};
	padding-left: 4px;
`

const AddBarItemContainer = styled.div`
	display: flex;
	flexDirection: 'row';
	padding: 10px;

`

const NavBarText = styled.div`
	font-weight: 500; //medium;
`

/* Component */

class AddBar extends Component {

	handleClickOnAddCover = (e) => {
		this.props.addCoverHandler(e);
		State.isShowingPopup = !State.isShowingPopup;
		console.debug(State.isShowingPopup);
	}

	render() {
		return (
			<AddBarContainer>
				<AddBarItem image={addicon} label="Add Icon" />
				<AddBarItem image={addcover} label="Add Cover" onClick={this.handleClickOnAddCover} />
				<AddBarItem image={adddiscussion} label="Add Discussion" />
			</AddBarContainer>
		);
	}
}

class AddBarItem extends Component {
	render() {
		return (
			<AddBarItemContainer onClick={this.props.onClick}>
				<AddBarIcon src={this.props.image}/>
				<AddBarLabel>{this.props.label}</AddBarLabel>
			</AddBarItemContainer>
		);
	}
}

export default AddBar;