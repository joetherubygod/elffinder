import React, {Component} from 'react';

export default class QuickMessages extends Component {
  static propTypes = {
    list: React.PropTypes.array,
    clickAddMessage: React.PropTypes.func
  };
  render() {
    let list = this.props.list.map((e) => {
      let clicker = () => {
        this.props.clickAddMessage(e.text);
      };
      return (
        <button type="button" className="list-group-item" key={e.key} onClick={clicker}>{e.text}</button>
      );
    });
    return (
      <div className="quickmessages">
        <div className="list-group">
          {list}
        </div>
      </div>
    );
  }
}
