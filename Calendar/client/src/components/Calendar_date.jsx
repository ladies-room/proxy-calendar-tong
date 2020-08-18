import React from 'react';
import moment from 'moment';
// import './Calendar.css';

import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // date: moment(),
      createdAt: moment(),
      focused: false
    }
  }
  render() {
    return (
      <div>
        <h2>hi</h2>
        <SingleDatePicker
          date={this.state.createdAt}

          onDateChange={date => this.setState({ createdAt: date })}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          id="your_unique_id"
        />
      </div>
    )
  }
}
