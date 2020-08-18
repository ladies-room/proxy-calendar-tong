import React from 'react';
import Day from './Day';
import styled from 'styled-components';

const WeekRow = styled.table`
display: table;
border-color: grey;
`
const WeekBody = styled.tbody`
display: table-row-group;
    vertical-align: middle;
    `
const WeekTr = styled.tr`
display: table-row;
vertical-align: inherit;
border-spacing: 0px 2px;
`
const DayTd = styled.td`
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
display: table-cell;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 15px;
padding-right: 15px;
vertical-align: inherit;
`
export default class Week extends React.Component {
  constructor(props) {
    super(props)
    // this.addDateToDatePicker = this.addDateToDatePicker.bind(this);
  }
  // addDateToDatePicker(dateRange, num, haha) {
  //   console.log(dateRange, num, haha);
  // }
  render() {
    let days = [];
    // let { date } = this.props;
    // const { month, selected, select } = this.props;

    for (var i = 0; i < 7; i++) {
      var haha = 1
      var day = {
        name: this.props.date.format("dd").substring(0, 1),
        number: this.props.date.date(),
        isCurrentMonth: this.props.date.month() === this.props.month.month(),
        isToday: this.props.date.isSame(new Date(), "day"),
        date: this.props.date
      };
      days.push(
        <DayTd key={day.date}>
          <Day
            haha={haha}
            day={day}
            selected={this.props.selected}
            select={this.props.select}
            addDateToDatePicker={this.props.addDateToDatePicker}
          />
        </DayTd>
      );
      // console.log(days[0])
      // this.props.date = this.props.date.clone();
      this.props.date.add(1, "day");
    }
    return (
      <tr key={days}
        className="row week">
        {days}
      </tr>
    );
  }
}
