import React, {Component} from 'react';

export default class QuickMessages extends Component {
  render() {
    var that = this;
    var list = this.props.list.map(function(e){
      var clicker = function(){
        that.props.clickAddMessage(e.text);
      }
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
