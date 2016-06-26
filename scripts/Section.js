import React, {Component} from 'react'
import Availability from './Availability';
import RenderMessages from './RenderMessages';

export default class Section extends Component {
  render() {
    var that = this;
    var userlist = this.props.userList.map(function(user){
      return (
        <tr key={user.id}>
          <td>
            {user.name}
          </td>
          <td>
            { (user.id == that.props.user.id) ? <Availability available={user.available} /> : user.available ? "leszek" : "nem leszek" }
          </td>
        </tr>
      );
    });
    return (
      <section>
        <div className="date">
          <h2>szerda ???</h2>
        </div>
        <div className="table">
          <table>
            <tbody>
              {userlist}
            </tbody>
          </table>
        </div>
        <div className="messages">
          <h2>Uzenetek</h2>
          <RenderMessages msgs={this.props.msgs} />
        </div>
      </section>
    );
  }
}
