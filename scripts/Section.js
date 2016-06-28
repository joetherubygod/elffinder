import React, {Component} from 'react';
import SectionDate from './SectionDate';
import SectionTable from './SectionTable';
import SectionMessages from './SectionMessages';
import SectionAvailability from './SectionAvailability';


export default class Section extends Component {
  static propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    msgs: React.PropTypes.array,
    userList: React.PropTypes.array
  };
  render() {
    let list = this.props.userList.map((user) => {
      return (
        <tr key={user.id}>
          <td>
            {user.name}
          </td>
          <td>
            { (user.id === this.props.user.id) ?
              <SectionAvailability available={user.available} /> : user.available ? 'leszek' : 'nem leszek' }
          </td>
        </tr>
      );
    });
    return (
      <section>
        <SectionDate />
        <SectionTable list={list} />
        <SectionMessages isLoading={this.props.isLoading} msgs={this.props.msgs} />
      </section>
    );
  }
}
