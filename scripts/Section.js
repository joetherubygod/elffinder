import React, {Component} from 'react';
import SectionDate from './SectionDate';
import SectionTable from './SectionTable';
import SectionMessages from './SectionMessages';
import Availability from './Availability';


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
            { (user.id === that.props.user.id) ? <Availability available={user.available} /> : user.available ? 'leszek' : 'nem leszek' }
          </td>
        </tr>
      );
    });
    return (
      <section>
        <SectionDate />
        <SectionTable userlist={userlist} />
        <SectionMessages isLoading={this.props.isLoading} msgs={this.props.msgs} />
      </section>
    );
  }
}
