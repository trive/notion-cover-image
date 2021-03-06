import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import Constants from './Constants';
import Popup from './Popup';
import NavBar from './NavBar';
import AddBar from './AddBar';
import CoverImage from './CoverImage';
import './reset.css';
import styled from 'styled-components';


/* Styled Components */

const StyledApp = styled.div`	
 	font-size: 14px;
 	overflow:hidden;
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
		this.scrollRef = React.createRef();
		// State
		this.state = {
			isShowingPopup : false,
			hasCoverImage : false,
			selectedCategory : 2,   // Default
			selectedImage : 4		// Default
		}
	}

	/* Mouse events */

	handleClickOnAddCover = (e) => {
		console.debug('Click on add cover');
		this.scrollRef.current.scrollTop = 0;
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
		this.setState({
			isShowingPopup : !this.state.isShowingPopup
		})
	}

	handleClickOnRemove = (e) => {
		console.debug('Click on remove image');
		this.setState({
			isShowingPopup : false,
			hasCoverImage : false
		})
	}

	render() {
		const { isShowingPopup, hasCoverImage, selectedCategory, selectedImage } = this.state;
		const { PickerPath, ImageCategories } = Constants;
		const overlayOpacity = spring(this.state.isShowingPopup ? Constants.OverlayMaxOpacity : 0.0, Constants.SpringParameters);
		return (
			<StyledApp>
				<NavBar />
				<CoverImage showCoverImage={isShowingPopup || hasCoverImage}
							imagePath={require(PickerPath + ImageCategories[selectedCategory-1] + "/" + selectedImage + '.jpg')}
							onClick={this.handleClickOnCover} />
				<AddBar addCoverHandler={this.handleClickOnAddCover}
						showAddCover={!hasCoverImage} />
				<Content>Travel List</Content>
				<Popup scrollRef={this.scrollRef}
					   isVisible={isShowingPopup}
					   hasCoverImage={hasCoverImage}
					   selectedCategory={selectedCategory}
					   selectedImage={selectedImage}
					   onClick={this.handleClickOnImage}
					   onRemoveClick={this.handleClickOnRemove} />
				<Motion
					style={{opacity: overlayOpacity}}>
				{interpolatingStyle =>
					<Overlay
					isClickable={isShowingPopup}
					onClick={this.handleClickOnOverlay}
					style={interpolatingStyle} />}
				</Motion>
			</StyledApp>
		);
	}
}

export default App;
