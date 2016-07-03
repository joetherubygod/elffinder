import React, {Component} from 'react';

export default class SectionTable extends Component {
  static propTypes = {
    list: React.PropTypes.array
  };
  render() {
    return (
      <div className="table">
        <table>
          <tbody>
            {this.props.list}
          </tbody>
        </table>
      </div>
    );
  }
}
