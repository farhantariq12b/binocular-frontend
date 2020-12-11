import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';


// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import 'bootstrap/dist/css/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';
 
 class DatePicker extends React.Component{

  constructor (props) {
    super(props);
    this.handleCallback = this.handleCallback.bind(this);
  }
  handleCallback (start, end ) {
    let thisFromProps = this.props.this;
    let s_date = start._d
    let e_date = end._d
    this.props.callbackhandle(s_date , e_date , thisFromProps) 
    }
  render() {
    return (
      <DateRangePicker 
      onCallback={this.handleCallback}
      showDropdowns = {true}
      // initialSettings={{ startDate: '06/07/2020', endDate: '06/08/2020' }}// month date year
      >
          <input type="text" className="dropdown-btn1" />
        {/* <input type="text" className="dropdown-btn1" > SELECT DATE </input> */}
      </DateRangePicker>
    );
  }
}
export default DatePicker