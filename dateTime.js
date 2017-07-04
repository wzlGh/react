import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';
import moment from 'moment';

export default class App extends React.Component {
  state = {
    selValue: moment()
  };

  disabledDate = (value) => {
    const startValue = moment().subtract(1, 'days');
    const endValue = new Date(2017, 8, 1);
    if (!value || !startValue) {
      return false;
    }
    return value.valueOf() <= startValue.valueOf() || value.valueOf() >= endValue.valueOf();
  }
  onChange = (value) => {
  	this.setState({
  		selValue: value
  	})
  }

  render() {
    const { selValue } = this.state; 
    return (
      <div>
        <DatePicker
          disabledDate={this.disabledDate}
          format="YYYY-MM-DD"
          value={selValue}
          onChange={this.onChange}
        />
        <span>当前日期为{moment(selValue).format('YYYY-MM-DD')}</span>
      </div>
    );
  }
}