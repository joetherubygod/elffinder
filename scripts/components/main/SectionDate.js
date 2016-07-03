import React, {Component} from 'react';
import moment from 'moment';

export default class SectionDate extends Component {
  render() {
    let date = moment().format('YYYY MM DD - dddd');
    return (
      <div className="date">
        <h2>{date}</h2>
      </div>
    );
  }
}
