import React, { Component } from 'react';
import Constants from './Constants';
import addicon from './images/add-icon.svg';
import addcover from './images/add-cover.svg';
import adddiscussion from './images/add-discussion.svg';
import styled from 'styled-components';


/* Styled Components */

const AddBarContainer = styled.div`
	display: flex;
	flexDirection: row;
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
	flexDirection: row;
	padding: 10px;
	overflow: hidden;
`


/* Component */

class AddBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isHighlighted : false
		}
	}

	handleIn = () => {
		this.setState({
			isHighlighted : true
		});
	}
	handleOut = () => {
		this.setState({
			isHighlighted : false
		});
	}
	handleClickOnAddCover = (e) => {
		this.handleOut(e);
		this.props.addCoverHandler(e);
	}

	render() {
		const { isHighlighted } = this.state;
		const { LightGray } = Constants;
		const { handleIn, handleOut, handleClickOnAddCover } = this;
		const color = isHighlighted ? LightGray : null;
		return (
			<AddBarContainer>
				<AddBarItem image={addicon} label="Add Icon" />
				{this.props.showAddCover && 
					<AddBarItem image={addcover}
								label="Add Cover"
								onClick={handleClickOnAddCover}
								handleIn={handleIn}
								handleOut={handleOut}
								style={{ backgroundColor: color,
										 borderRadius: '3px'}} />
				}
				<AddBarItem image={adddiscussion} label="Add Discussion" />
			</AddBarContainer>
		);
	}
}

class AddBarItem extends Component {
	render() {
		const { onClick, handleIn, handleOut, style, image, label } = this.props;
		return (
			<AddBarItemContainer 	onClick={onClick}
									onMouseOver={handleIn}
									onMouseDown={handleIn}
									onTouchStart={handleIn}
									onMouseUp={handleOut}
									onMouseOut={handleOut}
									onTouchMove={handleOut}
									onTouchEnd={handleOut}
									onTouchCancel={handleOut}
									style={style}>
				<AddBarIcon src={image}/>
				<AddBarLabel>{label}</AddBarLabel>
			</AddBarItemContainer>
		);
	}
}

export default AddBar;