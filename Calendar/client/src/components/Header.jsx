import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  // display: flex;
  // padding-top: 50px;
  margin: 200px
`

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <HeaderDiv>
          <div></div>
          <div></div>
          <div></div>
        </HeaderDiv>
      </header>
    );
  }
}