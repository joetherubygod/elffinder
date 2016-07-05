import React, {Component} from 'react';

export default class SectionTable extends Component {
  static propTypes = {
    user: React.PropTypes.object,
    userList: React.PropTypes.array
  };
  render() {
    let list = this.props.userList.filter((eachUser) => eachUser.id !== this.props.user.id ).map((eachUser) => {
      return (
        <tr key={eachUser.id}>
          <td>
            {eachUser.name}
          </td>
          {eachUser.availability ?
          <td className="zoldtabla">leszek</td> :
          <td className="pirostabla">nem leszek</td>}
        </tr>
      );
    });
    return (
      <div className="table">
        <table>
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    );
  }
}
