import React from 'react';
import styled from 'styled-components';

const CalendarTable = styled.table`
display: table;
border-top: solid 2x green;
background-color: pink;
border-collapse: separate;
box-sizing: border-box;
border-spacing: 0px 2px;
text-align: center !important;
// border-collapse: collapse;
`
const TableTbody = styled.tbody`
display: table-row-group;
vertical-align: middle;
box-sizing: border-box;
text-align: center !important;
`
const TableTr = styled.tr`
    display: table-row;
    vertical-align: inherit;
    box-sizing: border-box;
    text-align: center !important;
`
const TableTd = styled.td`
    display: table-cell;
    border-top: solid 2x green;
    vertical-align: inherit;
    box-sizing: border-box;
    border-spacing: 0px 2px;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-left: 20%;
    padding-right: 20%;
    margin: 20px;
`
class Table extends React.Component {
  render() {
    return (
      <div>
        <CalendarTable>
          <TableTbody>
            <TableTr>
              <TableTd>1</TableTd>
              <TableTd>10000</TableTd>
              <TableTd>1</TableTd>
            </TableTr>
            <TableTr>
              <TableTd>1</TableTd>
              <TableTd>10000</TableTd>
              <TableTd>1</TableTd>
            </TableTr>
            <TableTr>
              <TableTd>1</TableTd>
              <TableTd>0</TableTd>
              <TableTd>100</TableTd>
            </TableTr>
          </TableTbody>
        </CalendarTable>
      </div>
    );
  }
}


export default Table;