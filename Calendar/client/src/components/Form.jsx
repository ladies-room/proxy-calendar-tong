// ORIGINAL FORM!!
import React from 'react'
import styled from 'styled-components';
import Modal from 'styled-react-modal';
// import Modal from 'react-modal';
import moment from 'moment'
import Calendar from './Calendar.jsx';
import DatePicker from './DatePicker.jsx'
import ToggleModal from './ToggleModal.jsx';
// Modal.setAppElement('#app');

// FORM HEAD: (FIRST):
const NightSpan = styled.span`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  white-space: nowrap !important;
  padding-left: 4px !important;
`
const DateInput_2 = styled.input`
-webkit-box-align: start !important;
    -webkit-box-pack: justify !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: flex-start !important;
    padding-bottom: 16px !important;

    height: 56px !important;
    width: 100% !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
    padding-top: 26px !important;
    padding-bottom: 10px !important;
    background-color: transparent !important;
    font-family: inherit !important;
    font-size: 14px !important;
    font-weight: inherit !important;
    line-height: 18px !important;
    appearance: none !important;
    cursor: pointer !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    color: rgb(113, 113, 113) !important;
    border-width: initial !important;
    border-style: none !important;
    border-color: initial !important;
    border-image: initial !important;
    outline: none !important;
    margin: 0px !important;
    overflow: hidden !important;
`
const FormMainDiv = styled.div`
-webkit-box-direction: normal !important;
    -webkit-box-orient: vertical !important;
    display: flex !important;
    flex-direction: column !important;
`
const FormHeadDiv = styled.div`
-webkit-box-align: baseline !important;
    -webkit-box-pack: justify !important;
    -webkit-box-direction: normal !important;
    -webkit-box-orient: horizontal !important;
    // display: flex !important;
    flex-direction: row !important;
    justify-content: space-between !important;
    align-items: baseline !important;
    padding-bottom: 20px
`
const FormSpan = styled.span`
color: rgb(34, 34, 34) !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 20px !important;
    white-space: nowrap !important;
    padding-left: 4px !important;
`

// FORM BODY (MIDDLE):
const FormBodyDiv = styled.div`
margin-bottom: 16px !important;
background-color: #FFFFFF !important;
position: relative !important;
border-radius: 8px;

`
const FormBodyInputTopDiv = styled.div`
position: relative !important;
    display: flex !important;
    width: 100% !important;
    color: rgb(34, 34, 34) !important;
    background-color: transparent !important;
    box-shadow: none !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-size: 16px !important;
    line-height: 20px !important;
    font-weight: 400 !important;
    margin: 0px !important;
    border-width: initial !important;
    // border-style: none !important;
    border-image: initial !important;
    border-radius: 0px !important;
    outline: 0px !important;
    border-color: transparent !important;
`
const InputTop = styled.div`
  width: 100% !important;
  flex: 1 1 0%;
`
const InputTopDiv = styled.div`
position: relative !important;
    display: flex !important;
    width: 100% !important;
    color: rgb(34, 34, 34) !important;
    background-color: transparent !important;
    box-shadow: none !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-size: 16px !important;
    line-height: 20px !important;
    font-weight: 400 !important;
    margin: 0px !important;
    border-width: initial !important;
    border-style: none !important;
    border-image: initial !important;
    border-radius: 0px !important;
    outline: 0px !important;
    border-color: transparent !important;
`
const InputTopLeftDiv = styled.div`
position: relative !important;
    width: 100% !important;
    flex: 1 1 0% !important;
    padding: 0px !important;
    overflow: hidden !important;
`
const DateInput = styled.input`
height: 56px !important;
    width: 100% !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
    padding-top: 26px !important;
    padding-bottom: 10px !important;
    background-color: transparent !important;
    font-family: inherit !important;
    font-size: 14px !important;
    font-weight: inherit !important;
    line-height: 18px !important;
    appearance: none !important;
    cursor: pointer !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    color: rgb(113, 113, 113) !important;
    border-width: initial !important;
    // border-style: none !important;
    border-color: initial !important;
    border-image: initial !important;
    outline: none !important;
    margin: 0px !important;
    overflow: hidden !important;
    box-sizing: border-box;
`
const Text = styled.div`
position: absolute !important;
    top: 12px !important;
    left: 12px !important;
    right: 12px !important;
    pointer-events: none !important;
    font-size: 10px !important;
    line-height: 12px !important;
    color: rgb(34, 34, 34) !important;
    text-transform: uppercase !important;
    font-weight: 800 !important;
    max-width: 100% !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    margin: 0px !important;
    padding: 0px !important;
    overflow: hidden !important;
`

// FORM BUTTON (LAST):
const Label = styled.label`
// position: relative !important;
// display: flex !important;
// width: 100% !important;
// color: rgb(34, 34, 34) !important;
// background-color: transparent !important;
// box-shadow: none !important;
// font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
// font-size: 16px !important;
// line-height: 20px !important;
// font-weight: 400 !important;
// margin: 0px !important;
// border-width: initial !important;
// border-style: none !important;
// border-image: initial !important;
// border-radius: 0px !important;
// outline: 0px !important;
// border-color: transparent !important;
`
const GuestInput = styled.input`
position: relative !important;
    width: 100% !important;
    flex: 1 1 auto !important;
    padding: 0px !important;
    overflow: hidden !important;
`
const LabelDiv = styled.div`
height: 56px !important;
    width: 100% !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
    padding-top: 26px !important;
    padding-bottom: 10px !important;
    background-color: transparent !important;
    font-family: inherit !important;
    font-size: 14px !important;
    font-weight: inherit !important;
    line-height: 18px !important;
    appearance: none !important;
    cursor: pointer !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    color: rgb(113, 113, 113) !important;
    border-width: initial !important;
    // border-style: none !important;
    border-color: initial !important;
    border-image: initial !important;
    outline: none !important;
    margin: 0px !important;
    overflow: hidden !important;
    box-sizing: border-box;
`

// BUTTON:
const ButtonInput = styled.input`
cursor: pointer !important;
    display: inline-block !important;
    position: relative !important;
    text-align: center !important;
    touch-action: manipulation !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-size: 16px !important;
    line-height: 20px !important;
    font-weight: 600 !important;
    padding-top: 14px !important;
    padding-bottom: 14px !important;
    padding-left: 24px !important;
    padding-right: 24px !important;
    color: rgb(255, 255, 255) !important;
    width: 100% !important;
    margin: 0px !important;
    text-decoration: none !important;
    border-radius: 8px !important;
    outline: none !important;
    transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
    border-width: initial !important;
    border-style: none !important;
    border-color: initial !important;
    border-image: initial !important;
    background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%) !important;
`

// MODAL STYLES:
const StyledModal = styled.div`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px !important;
    display: inline-block !important;
    padding-top: 24px !important;
    padding-bottom: 16px !important;
    padding-left: 32px !important;
    padding-right: 32px !important;
    position: absolute !important;
    top: -24px !important;
    right: -32px !important;
    width: 661px !important;
    z-index: 1 !important;
    min-height: 460px !important;
    background: rgb(255, 255, 255) !important;
    border-radius: 16px !important;
`
const ModalHeadDiv = styled.div`
-webkit-box-align: start !important;
    -webkit-box-pack: justify !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: flex-start !important;
    padding-bottom: 16px !important;
`
const DatePickerDiv = styled.div`
-webkit-box-flex: 0 !important;
    order: 2 !important;
    flex-grow: 0 !important;
    flex-shrink: 0 !important;
    margin-left: 24px !important;
    min-width: 270px !important;
    display: block !important;
`

const ModalBodyDiv = styled.div`
margin-right: 0px !important;
    margin-left: -8px !important;
    overflow: visible !important;
    // display: flex !important;
    height: 100% !important;
`

const TotalDateDiv = styled.div`
color: rgb(34, 34, 34) !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-weight: 600 !important;
    font-size: 22px !important;
    line-height: 26px !important;
`
const NightsHead2 = styled.h2`
color: inherit !important;
font-size: 1em !important;
font-weight: inherit !important;
line-height: inherit !important;
margin: 0px !important;
padding: 0px !important;
`
const DateRangeDiv = styled.div`
color: rgb(113, 113, 113) !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-weight: 400 !important;
    font-size: 14px !important;
    line-height: 18px !important;
    padding-top: 8px !important;
`
const DateRange_2Div = styled.div`
line-height: 18px !important;
    max-height: 36px !important;
    text-overflow: ellipsis !important;
    display: -webkit-box !important;
    -webkit-line-clamp: 2 !important;
    -webkit-box-orient: vertical !important;
    height: 36px !important;
    overflow: hidden !important;
`
const ButtomSectionDiv = styled.div`
-webkit-box-align: center !important;
    -webkit-box-pack: justify !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    padding-left: 12px !important;
    padding-right: 34px !important;
    padding-top: 15px;
    margin-top: -4px !important;
`
const ButtonDiv = styled.div`
-webkit-box-align: center !important;
    padding-left: 8px !important;
    display: flex !important;
    align-items: center !important;
    z-index: 1 !important;
    flex: 0 0 auto !important;
`
const SvgDiv = styled.div`
appearance: none !important;
    display: inline-block !important;
    color: rgb(34, 34, 34) !important;
    cursor: pointer !important;
    touch-action: manipulation !important;
    position: relative !important;
    border-radius: 50% !important;
    border-width: initial !important;
    border-style: none !important;
    border-color: initial !important;
    border-image: initial !important;
    outline: 0px !important;
    margin: 0px !important;
    padding: 0px !important;
    background: transparent !important;
    transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s !important;
`
const ClearDateBtn = styled.button`
cursor: pointer !important;
    display: inline-block !important;
    position: relative !important;
    text-align: center !important;
    width: auto !important;
    touch-action: manipulation !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-size: 14px !important;
    line-height: 18px !important;
    font-weight: 600 !important;
    padding-top: 8px !important;
    padding-bottom: 8px !important;
    padding-left: 8px !important;
    padding-right: 8px !important;
    color: rgb(34, 34, 34) !important;
    margin: 0px -8px !important;
    border-radius: 8px !important;
    outline: none !important;
    transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
    border-width: initial !important;
    border-style: none !important;
    border-color: initial !important;
    border-image: initial !important;
    background: transparent !important;
    text-decoration: underline !important;
`
const CloseModalBtn = styled.button`
cursor: pointer !important;
    display: inline-block !important;
    position: relative !important;
    text-align: center !important;
    width: auto !important;
    touch-action: manipulation !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-size: 14px !important;
    line-height: 18px !important;
    font-weight: 600 !important;
    padding-top: 8px !important;
    padding-bottom: 8px !important;
    padding-left: 16px !important;
    padding-right: 16px !important;
    color: rgb(255, 255, 255) !important;
    margin: 0px !important;
    text-decoration: none !important;
    border-radius: 8px !important;
    outline: none !important;
    transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
    border-width: initial !important;
    border-style: none !important;
    border-color: initial !important;
    border-image: initial !important;
    background: rgb(34, 34, 34) !important;
`
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showCalendar: false,
      modalIsOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setModalIsOpen = this.setModalIsOpen.bind(this);
  }
  setModalIsOpen() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      showCalendar: false
    })
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.props.checkPrice(this.props.dateRange[0], this.props.dateRange[1])
  }
  handleClick(event) {
    // console.log('clicked')
    this.setState({
      showCalendar: true
    })
  }
  render() {
    var toggleCalendar;
    if (this.state.showCalendar) {
      toggleCalendar =
        <StyledModal isOpen={true}
          style={{
            overlay: {
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 6px 20px!important',
              display: 'inline-block!important',
              paddingTop: '24px!important',
              paddingBottom: '16px!important',
              paddingLeft: '32px!important',
              paddingRight: '32px!important',
              position: 'absolute!important',
              top: '-24px!important',
              right: '-32px!important',
              width: '661px!important',
              zIndex: '1!important',
              minHeight: '460px!important',
              background: 'rgb(255, 255, 255)!important',
              borderRadius: '50px!important'
            },
            content: {
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 6px 20px!important',
              display: 'inline-block!important',
              paddingTop: '24px!important',
              paddingBottom: '16px!important',
              paddingLeft: '32px!important',
              paddingRight: '32px!important',
              position: 'absolute!important',
              top: '-24px!important',
              right: '-32px!important',
              width: '661px!important',
              zIndex: '1!important',
              minHeight: '460px!important',
              background: 'rgb(255, 255, 255)!important',
              borderRadius: '50px!important'
            }
          }}
        >
          <ModalHeadDiv>
            <div stye={{ order: 1, paddingBottom: '0px' }}>
              <TotalDateDiv>
                <NightsHead2>
                  Select Dates
                </NightsHead2>
              </TotalDateDiv>
              <DateRangeDiv>
                <DateRange_2Div>3minghts
              </DateRange_2Div>
              </DateRangeDiv>

            </div>
            <DatePickerDiv>
              <div style={{
                display: 'flex',
                boxShadow: 'rgb(176, 176, 176) 0px 0px 0px 1px inset ',
                borderRadius: '8px'
              }}>
                <DatePicker />
              </div>
            </DatePickerDiv>
          </ModalHeadDiv>

          {/* BODY & CALENDAR */}
          <ModalBodyDiv>
            <Calendar />
            {/* BOTTOM SECTION */}
            <ButtomSectionDiv>
              <SvgDiv style={{
                fontSize: '12px',
                lineHeight: '16px',
                color: 'rgb(113, 113, 113)'
              }}>KEYBOARD</SvgDiv>

              <ButtonDiv>
                <ClearDateBtn>Clear dates</ClearDateBtn>
                <span style={{ marginLeft: '16px' }}>
                  <CloseModalBtn onClick={this.setModalIsOpen} >Close</CloseModalBtn>
                </span>
              </ButtonDiv>
            </ButtomSectionDiv>
          </ModalBodyDiv>
        </StyledModal >
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormHeadDiv style={{
            fontWeight: 600,
            fontSize: '22px',
            lineHeight: '26px !important'
          }}>
            ${this.props.totalPrice}
            <FormSpan>/ night</FormSpan>
          </FormHeadDiv>
          {/* BODY DIV START */}
          {/* BODY DIV START */}
          {/* BODY DIV START */}
          <FormBodyDiv>
            <InputTop>
              <InputTopDiv>
                {/* LEFT CHECKIN DIV */}
                <InputTopLeftDiv>
                  <Text>CHECK-IN</Text>
                  <DateInput
                    type="text"
                    placeholder='Add date'
                    value={this.props.checkin}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                  />
                </InputTopLeftDiv>
                {/* RIGHT CHECKOUT DIV */}
                <InputTopLeftDiv>
                  <Text>CHECKOUT</Text>
                  <DateInput
                    type="text"
                    placeholder='Add date'
                    value={this.props.checkout}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                  />
                </InputTopLeftDiv>
              </InputTopDiv>
            </InputTop>

            <div className="InputBottom"
              style={{ position: 'relative', width: '100%', flex: '1 1 0%' }}>
              <InputTopLeftDiv>
                <Text>GUESTS</Text>
                <DateInput
                  type="text"
                  placeholder='1 guests'
                />
              </InputTopLeftDiv>
            </div>
          </FormBodyDiv>
          {/* BODY DIV END */}
          {/* BODY DIV END */}
          {/* BODY DIV END */}
          {toggleCalendar}
          <ButtonInput type="submit" value="Check Price" />
        </form >
        {/* <Calendar /> */}
      </div>
    );
  }
}

export default Form;