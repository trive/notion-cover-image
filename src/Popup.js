import React, { createRef, Component } from 'react';
import {Motion, spring} from 'react-motion';
import Constants from './Constants';
import PopupHeader from './PopupHeader';
import PopupSection from './PopupSection';
import styled from 'styled-components';


/* Styled Components */

const PopupContainer = styled.div`
	position: fixed;
	width: 97.3%;
	margin-left: 1.35%;
    background-color: white;
    border-radius: 18px 18px 34px 34px;
    box-shadow: 0px -1px 12px rgba(0, 0, 0, .15);
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
		var width = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;
		var height = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;
		var sheetHeight = height-Constants.PopupTopY-5;
		var popupOpacity = spring(this.props.isVisible ? 1.0 : 0.0, Constants.SpringParameters);
		var popupScale = spring(this.props.isVisible ? Constants.PopupScale : Constants.PopupClosedScale, Constants.SpringParameters);
		var popupTop = spring(this.props.isVisible ? Constants.PopupTopY : Constants.PopupClosedTopY, Constants.SpringParameters);
		return (
			<div>
				<Motion style={{ opacity: popupOpacity,
								 scale: popupScale,
								 top: popupTop}}>
					{value => 
						<PopupContainer style={{ opacity: value.opacity, height: sheetHeight, top: value.top, transform: `scale(${value.scale})` }}>
									<PopupHeader />
									<PopupSection sectionIndex={0}
												  descriptor="Gradients"
												  onClick={this.props.onClick} />
						 		</PopupContainer>}
				</Motion>
			</div>
		);
	}
}

export default Popup;