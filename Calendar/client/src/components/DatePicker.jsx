import React, { useState, useEffct } from 'react'
import styled from 'styled-components';


const Formbox = styled.div`
//   float: right;
//   width: 300px;
//   height: 380px;
//   padding-left: 5%;
//   padding-right: 5%;
//   box-shadow: 0 0 15px 0 #C0C0C0;
`;

const Forms = styled.div`
// display: flex;
`
const Labels = styled.label`
  display: flex;
  // justify-content: center;
`
const LabelLeft = styled.input`
justify-content: center;
  // height: 56px;
  // width: 100%;
  // box-sizing-border-box;
  // display: block;
  // padding-left: 12px !important;
  // padding-right: 12px !important;
  // padding-top: 26px !important;
  // padding-bottom: 10px !important;
  // font-family: inherit !important;
  // font-size: 14px !important;
  // font-weight: inherit !important;
  // line-height: 18px !important;
  // appearance: none !important;
  // cursor: pointer !important;
  // text-overflow: ellipsis !important;
  // white-space: nowrap !important;
  // color: rgb(113, 113, 113) !important;
  // border-width: initial !important;
  // border-color: initial !important;
  // border-image: initial !important;
  // outline: none !important;
  // margin: 0px !important;
  // overflow: hidden !important;
  // // background-color: transparent !important;
  // // border-style: none !important;
`

const LabelRight = styled.input`
justify-content: center;
// height: 56px;
// width: 100%;
// backgroud-color: pink;
// padding-left: 12px !important;
// padding-right: 12px !important;
// padding-top: 26px !important;
// padding-bottom: 10px !important;
// font-family: inherit !important;
// font-size: 14px !important;
// font-weight: inherit !important;
// line-height: 18px !important;
// appearance: none !important;
// cursor: pointer !important;
// text-overflow: ellipsis !important;
// white-space: nowrap !important;
// color: rgb(113, 113, 113) !important;
// border-width: initial !important;
// border-color: initial !important;
// border-image: initial !important;
// outline: none !important;
// margin: 0px !important;
// overflow: hidden !important;
`;

class DatePickerLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      input: '',
      output: '',
      guests: '',
      showCalendar: false,
      modalIsOpen: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setModalIsOpen = this.setModalIsOpen.bind(this)
  }

  setModalIsOpen() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      showCalendar: false
    })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log(
      'value: ' + this.state.value +
      'input: ' + this.state.input +
      'output ' + this.state.output +
      'guests ' + this.state.guests
    );
    event.preventDefault();
  }

  handleClick(event) {
    console.log('clicked')
    this.setState({
      showCalendar: true
    })

  }
  render() {
    return (
      <div>
        <Formbox>
          <Forms>
            <form onSubmit={this.handleSubmit}>
              <Labels>
                <div>CHECK-IN
            <LabelLeft
                    type="text"
                    name='input'
                    value={this.state.input}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                  />
                </div>
                <div>CHECKOUT
            <LabelRight
                    type="text"
                    name='output'
                    value={this.state.output}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                  />
                </div>
              </Labels>
              {/* <BtnInput
                type="submit" value="Check availability" /> */}
            </form>
          </Forms>
        </Formbox>
      </div>
    );
  }
}

export default DatePickerLeft;