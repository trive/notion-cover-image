import React, { createRef, Component } from 'react';
import styled from 'styled-components';


/* Styled Components */

const StyledPopup = styled.div`
  overflow-y:scroll;
  width:200px;
  height:200px;
  background-color:blue;
  -webkit-overflow-scrolling: touch;
`
const PopupContent = styled.div`
  height:400px;
  background-color:yellow;
`


/* Popup */

class Popup extends Component {

  constructor(props) {
    super(props);
    this.myRef = createRef();
  }

  render() {
    return (
      <StyledPopup ref={this.myRef} onScroll={this.handleScroll}>
        <PopupContent />
      </StyledPopup>
    );
  }

  handleScroll = (event) => {
    console.debug(this.myRef.current.scrollTop);
  }
}

export default Popup;