import React, { createRef, Component } from 'react';
import {Motion, spring} from 'react-motion';
import Constants from './Constants';
import PopupHeader from './PopupHeader';
import PopupSection from './PopupSection';
import RemoveButton from './RemoveButton';
import styled from 'styled-components';


/* Styled Components */

const PopupContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	width: 97.3%;
	margin-left: 1.35%;
    background-color: white;
    border-radius: 18px 18px 34px 34px;
    box-shadow: 0px -1px 12px rgba(0, 0, 0, .15);
    z-index: ${Constants.zPopup};
`

const PopupScroll = styled.div`
	flex-grow: 1;
	height: auto;
    overflow: scroll;
    border-radius: 0px 0px 34px 34px;
	::-webkit-scrollbar {display:none;}
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
		var popupTop = spring(this.props.isVisible ? Constants.PopupTopY : (this.props.hasCoverImage ? Constants.PopupAlreadyPresentTopY : Constants.PopupClosedTopY), Constants.SpringParameters);
		var pEvents = this.props.isVisible ? 'auto' : 'none';
		var Sections = Constants.ImageCategories.map((category,index) =>
			<PopupSection key={index}
						  categoryKey={(index+1).toString()}
						  descriptor={category}
						  onClick={this.props.onClick}
						  selectedImage={this.props.selectedImage}
						  isSelectedCategory={index+1 == this.props.selectedCategory} />)
		return (
			<div>
				<Motion style={{ opacity: popupOpacity,
								 scale: popupScale,
								 top: popupTop}}>
					{value =>
						<PopupContainer style={{ pointerEvents : pEvents, height: sheetHeight, opacity: value.opacity, top: value.top, transform: `scale(${value.scale})`}}>
							<PopupHeader />
								<PopupScroll>
									{Sections}		
									<RemoveButton onClick={this.props.onRemoveClick}
											 	  label="Remove Cover Photo"/>
								</PopupScroll>
						</PopupContainer>}
				</Motion>
			</div>
		);
	}
}

export default Popup;