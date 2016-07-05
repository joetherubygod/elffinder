import React, {Component} from 'react';

export default class QuickMessages extends Component {
  static propTypes = {
    list: React.PropTypes.array,
    clickAddMessage: React.PropTypes.func
  };
  render() {
    let list = this.props.list.map((e) => {
      let clickAddMessage = () => {
        this.props.clickAddMessage(e.text);
      };
      return (
        <li className="list-group-item" key={e.key} onClick={clickAddMessage}>{e.text}</li>
      );
    });
    return (
      <div className="quickmessages">
        <ul className="list-group">
          {list}
        </ul>
      </div>
    );
  }
}
