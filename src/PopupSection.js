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
	padding: 3px 14px 16px 14px;
`

const PopupSectionHeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	width: 100%;
`

const PopupSectionTitle = styled.div`
	flex-grow: 1;
	text-transform: uppercase;
	font-size: 12px;
	padding-bottom: 8px;
	padding-left: 1px;
`

const PopupSectionMore = styled.div`
	flex-grow: 0;
	padding-right: 1px;
	font-size: 12px;
	color: ${Constants.MidGray};
`

const PopupSectionGrid = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-left: -5px;
	min-width: 100%;
`

const PopupImage = styled.img`
	height: 59px;
	margin-left: 5px;
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
				<PopupSectionHeaderContainer>
					<PopupSectionTitle>{this.props.descriptor}</PopupSectionTitle>
					<PopupSectionMore>Show More</PopupSectionMore>
				</PopupSectionHeaderContainer>
				<PopupSectionGrid>
					{Images}
				</PopupSectionGrid>
			</PopupSectionContainer>
		);
	}
}

export default PopupSection;