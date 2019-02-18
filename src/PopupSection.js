import React, { Component } from 'react';
import Constants from './Constants';
import styled from 'styled-components';


/* Styled Components */

const PopupSectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 11px;
`

const PopupSectionTitle = styled.div`
	text-transform: uppercase;
	font-size: 12px;
	padding-bottom: 10px;
	padding-left: -3px;
`

const PopupSectionGrid = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 0 -2.5px;
	width: 100%;
`

const PopupImage = styled.img`
	height: 59px;
	margin: 0 2.5px;
	margin-bottom: 5px;
	border-radius: ${Constants.CornerRadius};
	flex: 1 0 26%;
	object-fit: cover;
	object-position: 50% 50%;
	${({ active }) => active && `
		box-shadow: 0px -1px 12px rgba(0, 0, 0, .15); //, inset 0px 0px 0px 10px #f00;
		box-sizing: border-box;
		border: 6px solid #fff;
  	`}
`

/* Component */

class PopupSection extends Component {
	isActive(number) {
		return this.props.isSelectedCategory && (number === this.props.selectedImage)
	}

	render() {
		var Images = Constants.Numbers.map((number) =>
			<PopupImage key={number}
						imageKey={number.toString()}
						src={require(Constants.PickerPath + this.props.descriptor + "/" + number.toString() + '.jpg')}
						active={this.isActive(number)}
						onClick={() => { this.props.onClick(parseInt(this.props.categoryKey), number) }}/>)
		return (
			<PopupSectionContainer>
				<PopupSectionTitle>{this.props.descriptor}</PopupSectionTitle>
				<PopupSectionGrid>
					{Images}
				</PopupSectionGrid>
			</PopupSectionContainer>
		);
	}
}

export default PopupSection;