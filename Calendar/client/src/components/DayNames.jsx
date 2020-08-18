import React from 'react';
import styled from 'styled-components';

export default class DayNames extends React.Component {
  render() {
    return (
      <tr>
        <td className="day">Su</td>
        <td className="day">Mo</td>
        <td className="day">Tu</td>
        <td className="day">We</td>
        <td className="day">Th</td>
        <td className="day">Fr</td>
        <td className="day">Sa</td>
      </tr>
    );
  }
}