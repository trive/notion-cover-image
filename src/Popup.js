import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import Constants from './Constants';
import PopupHeader from './PopupHeader';
import PopupSection from './PopupSection';
import RemoveButton from './RemoveButton';
import styled from 'styled-components';


/* Styled Components */

const PopupAndTailContainer = styled.div`
	position: fixed;
	width: 97.334%;
	margin-left: 1.334%;
    z-index: ${Constants.zPopup};
`

const PopupTail = styled.div`
	position: absolute;
	left: 0; 
	right: 0; 
	margin-left: auto; 
	margin-right: auto; 
	width: 0;
    height: 0;
    border-bottom: 9px solid #ffffff;
    border-left: 10px solid #ffffff00;
    border-right: 10px solid transparent;
`

const PopupContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
    background-color: white;
    border-radius: 18px 18px 34px 34px;
    box-shadow: 0px -1px 12px rgba(0, 0, 0, .15);
    overflow: hidden;
`

const PopupScroll = styled.div`
	flex-grow: 1;
	height: auto;
    overflow: scroll;
    background-color: white;
    border-radius: 0px 0px 34px 34px;
    -webkit-overflow-scrolling: touch; //inertial scrolling
	::-webkit-scrollbar {display:none;}
`


/* Popup */

class Popup extends Component {
	render() {
		const height = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;
		const sheetHeight = height-Constants.PopupTopY-5;
		const popupOpacity = spring(this.props.isVisible ? 1.0 : 0.0, Constants.SpringParameters);
		const popupScale = spring(this.props.isVisible ? Constants.PopupScale : (this.props.hasCoverImage ? Constants.PopupAlreadyPresentScale : Constants.PopupClosedScale), Constants.SpringParameters);
		const popupTop = spring(this.props.isVisible ? Constants.PopupTopY : (this.props.hasCoverImage ? Constants.PopupAlreadyPresentTopY  : Constants.PopupClosedTopY), Constants.SpringParameters);
		const pEvents = this.props.isVisible ? 'auto' : 'none';
		const tailTop = spring(this.props.isVisible ? -9 : 0, Constants.SpringParameters);
		const Sections = Constants.ImageCategories.map((category,index) =>
			<PopupSection key={index}
						  categoryKey={(index+1).toString()}
						  descriptor={category}
						  onClick={this.props.onClick}
						  selectedImage={this.props.selectedImage}
						  isSelectedCategory={index+1 === this.props.selectedCategory} />)
		return (
			<React.Fragment>
				<Motion style={{ opacity: popupOpacity,
								 scale: popupScale,
								 top: popupTop,
								 tailTop: tailTop}}>
					{value =>
						<PopupAndTailContainer style={{ pointerEvents : pEvents, height: sheetHeight, opacity: value.opacity, top: value.top, transform: `scale(${value.scale})`}}>
							<PopupTail style={{ top: `${value.tailTop}px` }}/>
							<PopupContainer>
								<PopupHeader />
								<PopupScroll ref={this.props.scrollRef}>
									{Sections}		
									<RemoveButton onClick={this.props.onRemoveClick}
											 	  label="Remove Cover Photo"/>
								</PopupScroll>
							</PopupContainer>
						</PopupAndTailContainer>}
				</Motion>
			</React.Fragment>
		);
	}
}

export default Popup;