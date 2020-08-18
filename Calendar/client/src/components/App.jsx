import React from 'react';
import moment from 'moment';
import './App';
import Form from './Form.jsx';
import Header from './Header.jsx'
// import Calendar from './Calendar.jsx';
import styled from 'styled-components';

const MainDiv = styled.div`
--page-shell-max-content-width: 1280px;
color: #222222 !important;
display: block !important;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
font-weight: 400 !important;
font-size: 16px !important;
line-height: 20px !important;
--gp-section-compact-padding: 32px !important;
--gp-section-compact-padding-condensed: 16px !important;
--gp-section-standard-padding: 48px !important;
--gp-section-standard-padding-condensed: 24px !important;

`
const Global = styled.div`
    background-color: #faf6e8;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    margin: 10%;

`;
const FormBox = styled.div`
  background-color: #ffffff
`
const Tables = styled.table`
  float: center;
`

class App extends React.Component {
  render() {
    return (
      <MainDiv>
        <Header />
        <div>
          {/* <Calendar /> */}
          <FormBox>
            <Global className="app">
              <Form />
            </Global>
            <div>
            </div>
          </FormBox>
        </div>
      </MainDiv >
    )
  }
}

export default App;