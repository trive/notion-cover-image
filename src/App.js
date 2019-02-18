import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import Constants from './Constants';
import Popup from './Popup';
import NavBar from './NavBar';
import AddBar from './AddBar';
import CoverImage from './CoverImage';
import logo from './images/share.svg';
import './reset.css';
import styled from 'styled-components';


/* Styled Components */

const StyledApp = styled.div`	
 	font-size: 14px;
	font-family: -apple-system, BlinkMacSystemFont;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
		color: ${Constants.StandardGray};
`

const Content = styled.p`
	font-weight: bold;
	font-size: 32px;
	color: ${Constants.StandardGray};
	padding-top: 39px;
	padding-left: 26px;
`
const Logo = styled.img`
	width: 150px;
	margin: 0 auto;
	display: block; // to make centering work
`

const Overlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0; 
	left: 0;
	background-color: rgba(0,0,0);
	pointer-events: ${props => props.isClickable ? 'auto' : 'none'};
`

/* App */

class App extends Component {

	constructor(props) {
		super(props);
		// State
		this.state = {
			isShowingPopup : true,
			hasCoverImage : true,
			selectedCategory : 2,   // Default
			selectedImage : 4		// Default
		}
	}

	/* Mouse events */

	handleClickOnAddCover = (e) => {
		console.debug('Click on add cover');
		this.setState({
			isShowingPopup : !this.state.isShowingPopup,
			hasCoverImage : true
		})
	}

	handleClickOnOverlay = (e) => {
		console.debug('Click on overlay');
		if (this.state.isShowingPopup) {
			this.setState({
				isShowingPopup : false
			})
		}
	}

	handleClickOnImage = (section, image) => {
		console.debug('Image click, section ' +  section + ', image ' + image)
		this.setState({
			selectedCategory : section,
			selectedImage : image
		});
	}

	handleClickOnCover = (e) => {
		console.debug('Click on cover image');
		if (!this.state.isShowingPopup) {
			this.setState({
				isShowingPopup : true
			})
		}
	}

	handleClickOnRemove = (e) => {
		console.debug('Click on remove image');
		this.setState({
			isShowingPopup : false,
			hasCoverImage : false
		})
	}

	render() {
		var overlayOpacity = spring(this.state.isShowingPopup ? Constants.OverlayMaxOpacity : 0.0, Constants.SpringParameters);
		return (
			<StyledApp>
				<NavBar />
				<CoverImage showCoverImage={this.state.isShowingPopup || this.state.hasCoverImage}
							imagePath={require(Constants.PickerPath + Constants.ImageCategories[this.state.selectedCategory-1] + "/" + this.state.selectedImage + '.jpg')}
							onClick={this.handleClickOnCover} />
				<AddBar addCoverHandler={this.handleClickOnAddCover}
						showAddCover={!this.state.hasCoverImage} />
				<Content>Travel List</Content>
				<Popup isVisible={this.state.isShowingPopup}
					   hasCoverImage={this.state.hasCoverImage}
					   selectedCategory={this.state.selectedCategory}
					   selectedImage={this.state.selectedImage}
					   onClick={this.handleClickOnImage}
					   onRemoveClick={this.handleClickOnRemove} />
				<Motion
					style={{opacity: overlayOpacity}}>
				{interpolatingStyle =>
					<Overlay
					isClickable={this.state.isShowingPopup}
					onClick={this.handleClickOnOverlay}
					style={interpolatingStyle} />}
				</Motion>
			</StyledApp>
		);
	}
}

export default App;
