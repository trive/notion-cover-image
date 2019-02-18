import React, { Component } from 'react';
import Constants from './Constants';
import hamburger from './images/hamburger.svg';
import share from './images/share.svg';
import more from './images/dotdotdot.svg';
import notifications from './images/notifications.svg';
import styled from 'styled-components';


/* Styled Components */

const NavBarContainer = styled.div`
	height: 44px;
	display: flex;
	flex-direction: 'row';
	flex-grow: 1;
	padding-left: 5px;
	padding-right: 6px;
`

const NavBarIcon = styled.img`
	padding: 9px;
	padding-top: ${props => props.opticalCorrection ? '7px' : '9px'};
`

const NavBarText = styled.div`
	font-weight: 500; //medium
	flex-grow: 1;
	margin: auto;
	padding-left: 10px;
`

const Divider = styled.div`
	width: 100%;
	height: 1px;
	opacity: 15%;
	background-color: #D8D8D8;
	display: block;
`

/* Popup */

class NavBar extends Component {

	render() {
		return (
			<div>
				<NavBarContainer>
					<NavBarIcon src={hamburger} />
					<NavBarText>Travel List</NavBarText>
					<NavBarIcon src={more} />
					<NavBarIcon opticalCorrection src={share} />
					<NavBarIcon src={notifications} />
				</NavBarContainer>
				<Divider />
			</div>
		);
	}
}

export default NavBar;