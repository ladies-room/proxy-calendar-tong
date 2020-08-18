import React from 'react';
import Week from './Week';
import DayNames from './DayNames';
import DatePicker from './DatePicker.jsx'

import moment from 'moment';
import styled from 'styled-components';

const ModalCalendarDiv = styled.div`
width: 100%;
padding-left: 100px;
`

const ModalHeaderDiv = styled.div`
  display:flex;
`
const HeaderLeftDiv = styled.div`
justify-content: space-between;
margin-right: 200px;
`
const HeaderRightDiv = styled.div`
  justify-content: space-between;
`
const SectionDiv = styled.div`
display:flex;
`
const SectionLeft = styled.div`
justify-content: space-between;
margin-right: 50px;
`
const SectionRight = styled.div`
justify-content: space-between;
`

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: moment(),
      selected: moment().startOf('day'),
      dateRange: []
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.addDateToDatePicker = this.addDateToDatePicker.bind(this);
  }

  addDateToDatePicker(dateRanges) {
    console.log(dateRanges);
    // var newState = this.state.dateRange.push(dateRange);
    // this.setState({
    // dateRange: [...this.state.dateRange, dateRanges]
    // })
    // console.log(this.state.dateRange)
  }

  previous() {
    const {
      month,
    } = this.state;

    this.setState({
      month: month.subtract(1, 'month'),
    });
  }

  next() {
    const {
      month,
    } = this.state;

    this.setState({
      month: month.add(1, 'month'),
    });
  }

  select(day) {
    this.setState({
      selected: day.date,
      month: day.date.clone(),
    });
  }

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month.clone().startOf("month").add("w" - 1).day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const {
      selected,
      month,
    } = this.state;

    while (!done) {
      weeks.push(
        <Week key={date}
          date={date.clone()}
          month={month}
          select={(day) => this.select(day)}
          selected={selected}
          addDateToDatePicker={this.addDateToDatePicker}
        />
      );

      date.add(1, "w");

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  renderMonthLabel() {
    const {
      month,
    } = this.state;

    return <span className="month-label">{month.format("MMMM YYYY")}</span>;
  }
  renderNextMonthLabel() {
    const {
      month,
    } = this.state;
    var nextMonth = this.state.month.add(1, 'month')
    return <span className="month-label">{nextMonth.format("MMMM YYYY")}</span>;
  }

  render() {
    return (
      <ModalCalendarDiv>
        <ModalHeaderDiv>
          <HeaderLeftDiv>
            <h3>total nights</h3>
          </HeaderLeftDiv>
          <HeaderRightDiv>
            <DatePicker />
          </HeaderRightDiv>
        </ModalHeaderDiv>
        <SectionDiv>
          <SectionLeft>
            <header>
              <h2>{this.renderMonthLabel()}</h2>
              <table>
                <tbody>
                  <DayNames />
                </tbody>
              </table>
            </header>
            <div>
              <table>
                <tbody>
                  {this.renderWeeks()}
                </tbody>
              </table>
            </div>
          </SectionLeft>
          <SectionRight>
            <header>
              <h2>{this.renderNextMonthLabel()}</h2>
              <table>
                <tbody>
                  <DayNames />
                </tbody>
              </table>
            </header>
            <div>
              <table>
                <tbody>
                  {this.renderWeeks()}
                </tbody>
              </table>
            </div>
          </SectionRight>
        </SectionDiv>
      </ModalCalendarDiv>
    );
  }
}

