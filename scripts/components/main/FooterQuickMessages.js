import React, {Component} from 'react';

export default class QuickMessages extends Component {
  static propTypes = {
    list: React.PropTypes.array,
    clickAddMessage: React.PropTypes.func,
    quickMessages: React.PropTypes.array
  };
  render() {
    let list = this.props.quickMessages.map((e) => {
      let clickAddMessage = () => {
        this.props.clickAddMessage(e.text);
      };
      return (
        <li className="list-group-item" key={e.id} onClick={clickAddMessage}>{e.text}</li>
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
