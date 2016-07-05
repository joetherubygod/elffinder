import React, {Component} from 'react';
import moment from 'moment';

export default class RenderMessages extends Component {
  static propTypes = {
    messages: React.PropTypes.array,
    userList: React.PropTypes.array
  };
  render(){
    if (this.props.userList.length === 0) {
      return null;
    }
    let list = this.props.messages.map((eachMessage) => {
      let seggfej = this.props.userList.filter(segg => segg.id === eachMessage.user_id);
      let date = moment(eachMessage.date, 'YYYY-MM-DD HH:mm:ss').fromNow();
      return (
        <div key={eachMessage.id} className="message">
          <h3>{seggfej[0].name} - {date}</h3>
          <p>{eachMessage.text}</p>
          <hr/>
        </div>
      );
    });
    return (
      <div>
        {list}
      </div>
    );
  }
}
