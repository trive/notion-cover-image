import React, { createRef, Component } from 'react';
import {Motion, spring} from 'react-motion';
import Constants from './Constants';
import PopupHeader from './PopupHeader';
import PopupSection from './PopupSection';
import sheet from './images/popup.png';
import styled from 'styled-components';


/* Styled Components */

const PopupContainer = styled.div`
	position: fixed;
	width: 90%;
	height: 70%;
	margin: auto;
    background-color: yellow;
    z-index: ${Constants.zPopup};
`

const PopupImage = styled.img`
	max-width:100%;
`

const PopupContent = styled.div`
	height:400px;
	background-color:yellow;
`


/* Popup */

class Popup extends Component {
	render() {
		var popupOpacity = spring(this.props.isVisible ? 1.0 : 0.0, Constants.SpringParameters);
		var popupScale = spring(this.props.isVisible ? Constants.PopupScale : Constants.PopupClosedScale, Constants.SpringParameters);
		var popupTop = spring(this.props.isVisible ? Constants.PopupTopY : Constants.PopupClosedTopY, Constants.SpringParameters);
		return (
			<div>
				<Motion style={{ opacity: popupOpacity,
								 scale: popupScale,
								 top: popupTop}}>
					{value => 	<PopupContainer style={{ opacity: value.opacity, top: value.top, transform: `scale(${value.scale})` }}>
									<PopupHeader />
									<PopupSection index={0}
												  descriptor="Colors"
												  onClick={this.props.onClick} />
						 		</PopupContainer>}
				</Motion>
			</div>
		);
	}

	handleScroll = (event) => {
		console.debug(this.myRef.current.scrollTop);
	}
}

export default Popup;