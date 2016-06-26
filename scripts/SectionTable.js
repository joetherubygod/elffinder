import React, {Component} from 'react';

export default class SectionTable extends Component {
  render() {
    return (
      <div className="table">
        <table>
          <tbody>
            {this.props.userlist}
          </tbody>
        </table>
      </div>
    );
  }
}
