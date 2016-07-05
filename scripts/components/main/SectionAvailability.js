import React, {Component} from 'react';

export default class SectionAvailability extends Component {
  static propTypes = {
    user: React.PropTypes.object,
    userList: React.PropTypes.array,
    clickChangeAvailability: React.PropTypes.func
  };
  clickChangeAvailability(e){
    this.props.clickChangeAvailability(e);
  }
  render() {
    return (
      <div className="availability">
        {this.props.userList.filter((user) => user.id === this.props.user.id).availability ?
        <button onClick={this.props.clickChangeAvailability.bind(this, this.props.user.id)}>leszek</button> :
        <button onClick={this.props.clickChangeAvailability.bind(this, this.props.user.id)}>nem leszek</button>}
      </div>
    );
  }
}
