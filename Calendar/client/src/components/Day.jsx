import React from 'react';
import styled from 'styled-components';

const DayRow = styled.span`
// display: flex;
// justify-content: stretch;
// background-color: pink;
// margin: 10px;
// -webkit-box-pack: center;
// -webkit-box-align: center;
// align-items: center;
// -webkit-box-flex: 1;
// flex: 1;
height: 35px;
cursor: pointer;
transition: all 0.2s;
`
class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateRange: []
    }
    this.selectDateRange = this.selectDateRange.bind(this);
  }

  selectDateRange(val) {
    var selectedValue = val
    console.log(selectedValue)
    var obj = selectedValue
    var selectedValueStr = selectedValue.date._d;
    console.log(obj.date)
    // console.log(selectedValueStr)
    this.props.addDateToDatePicker(selectedValueStr);
  }

  render() {
    return (
      <DayRow>
        <span
          key={this.props.day.date.toString()}
          className={"day" + (this.props.day.isToday ? " today" : "") + (this.props.day.isCurrentMonth ? "" : " different-month") + (this.props.day.date.isSame(this.props.selected) ? " selected" : "")}
          // onClick={() => select(this.day)}
          // onClick={() => this.selectDateRange(this.props.day)}
          onClick={() => this.selectDateRange(this.props.day)}
        >{this.props.day.number}</span>
      </DayRow>
    );
  }
}



export default Day;



// onClick={() => select(day)}
// onClick={() => select(this.day)}
// onClick={(e) => this.selectDateRange(e, this.props.day)}