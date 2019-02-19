import React, { Component } from 'react';
import Constants from './Constants';
import remove from './images/remove.svg';
import styled from 'styled-components';


/* Styled Components */

const RemoveButtonContainer = styled.div`
	height: 50px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
  	align-content: center;
	margin: 11px;
	margin-bottom: 50px;
	border-radius: ${Constants.CornerRadius};
	overflow: hidden;
`

const RemoveButtonIcon = styled.img`
`

const RemoveButtonLabel = styled.div`
	color: ${Constants.Red};
	padding-left: 8px;
`


/* Remove button */

class RemoveButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mouseDown : false
		}
	}

	makeActive = () => {
		this.setState({
			mouseDown : true
		});
	}

	makeInactive = () => {
		this.setState({
			mouseDown : false
		});
	}

	render() {
		const color = this.state.mouseDown ? Constants.MidGray : Constants.LightGray;
		return (
			<RemoveButtonContainer onClick={this.props.onClick}
								   style={{ backgroundColor : color }}
								   onMouseDown={this.makeActive}
								   onTouchStart={this.makeActive}
								   onMouseUp={this.makeInactive}
								   onTouchMove={this.makeInactive}
								   onTouchEnd={this.makeInactive}
								   onTouchCancel={this.makeInactive}>
				<RemoveButtonIcon src={remove}/>
				<RemoveButtonLabel>{this.props.label}</RemoveButtonLabel>
			</RemoveButtonContainer>
		);
	}
}

export default RemoveButton;