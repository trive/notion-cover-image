import React, { Component } from 'react';
import State from './State';
import addicon from './images/add-icon.svg';
import addcover from './images/add-cover.svg';
import adddiscussion from './images/add-discussion.svg';
import styled from 'styled-components';


/* Styled Components */

const AddBarContainer = styled.div`
  height: 89px;
  display: flex;
  flexDirection: 'row';
  padding: 10px;
`
const AddBarIcon = styled.img`
`

const AddBarLabel = styled.div`
  
`

const AddBarItemContainer = styled.div`
  display: flex;
  flexDirection: 'row';
  padding: 10px;
`

const NavBarText = styled.div`
  font-weight: 500; //medium
  font-size: 14pt;
  
`

/* Component */

class AddBar extends Component {

  handleClickOnAddCover = (e) => {
    this.props.addCoverHandler(e);
    State.isShowingPopup = !State.isShowingPopup;
    console.debug(State.isShowingPopup);
  }

  render() {
    return (
      <AddBarContainer>
        <AddBarItem image={addicon} label="Add Icon" />
        <AddBarItem image={addcover} label="Add Cover" onClick={this.handleClickOnAddCover} />
        <AddBarItem image={adddiscussion} label="Add Discussion" />
      </AddBarContainer>
    );
  }
}

class AddBarItem extends Component {
  render() {
    return (
      <AddBarItemContainer onClick={this.props.onClick}>
        <AddBarIcon src={this.props.image}/>
        <AddBarLabel>{this.props.label}</AddBarLabel>
      </AddBarItemContainer>
    );
  }
}

export default AddBar;