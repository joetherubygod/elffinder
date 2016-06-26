import React, {Component} from 'react'

export default class RenderMessages extends Component {
  render(){
    var mapped = this.props.msgs.map(function(msg){
      return (
        <div key={msg.key} className="message">
          <h3>{msg.user} - ?</h3>
          <p>{msg.text}</p>
          <hr />
        </div>
      );
    });
    return (
      <div className="message">
        {mapped}
      </div>
    );
  }
}
