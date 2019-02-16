import React, { createRef, Component } from 'react';
import styled from 'styled-components';


/* Styled Components */

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.0;
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