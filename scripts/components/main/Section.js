import React, {Component} from 'react';
import SectionDate from './SectionDate';
import SectionTable from './SectionTable';
import SectionMessages from './SectionMessages';
import SectionAvailability from './SectionAvailability';


export default class Section extends Component {
  static propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    msgs: React.PropTypes.array,
    userList: React.PropTypes.array,
    user: React.PropTypes.object
  };
  render() {
    let list = this.props.userList.map((u) => {
      return (
        <tr key={u.id}>
          <td>
            {u.name}
          </td>
          <td>
            { (u.id === this.props.user.id) ?
              <SectionAvailability available={u.availability} /> : u.availability ? 'leszek' : 'nem leszek' }
          </td>
        </tr>
      );
    });
    return (
      <section>
        <SectionDate />
        <SectionTable list={list} />
        <SectionMessages isLoading={this.props.isLoading} msgs={this.props.msgs} userList={this.props.userList} />
      </section>
    );
  }
}
