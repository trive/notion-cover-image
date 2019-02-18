import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
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
	overflow: hidden;
`

const NavBarText = styled.div`
	font-weight: 500; //medium;
`

/* Component */

class AddBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isHighlighted : false
		}
	}

	handleIn = (e) => {
		this.setState({
			isHighlighted : true
		});
	}
	handleOut = (e) => {
		this.setState({
			isHighlighted : false
		});
	}
	handleClickOnAddCover = (e) => {
		this.handleOut(e);
		this.props.addCoverHandler(e);
		State.isShowingPopup = !State.isShowingPopup;
	}

	render() {
		var color = this.state.isHighlighted ? Constants.LightGray : null;
		return (
			<AddBarContainer>
				<AddBarItem image={addicon} label="Add Icon" />
				{this.props.showAddCover ? (
					<AddBarItem image={addcover}
								label="Add Cover"
								onClick={this.handleClickOnAddCover}
								onMouseOver={this.handleIn}
								onMouseDown={this.handleIn}
								onMouseUp={this.handleOut}
								onMouseOut={this.handleOut}
								style={{ backgroundColor: color,
										 borderRadius: '3px'}} />
					) : null 
				}
				<AddBarItem image={adddiscussion} label="Add Discussion" />
			</AddBarContainer>
		);
	}
}

class AddBarItem extends Component {
	render() {
		return (
			<AddBarItemContainer 	onClick={this.props.onClick}
									onMouseOver={this.props.onMouseOver}
									onMouseDown={this.props.onMouseDown}
									onMouseUp={this.props.onMouseUp}
									onMouseOut={this.props.onMouseOut}
									style={this.props.style}>
				<AddBarIcon src={this.props.image}/>
				<AddBarLabel>{this.props.label}</AddBarLabel>
			</AddBarItemContainer>
		);
	}
}

export default AddBar;