import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {
  static propTypes = {
    user: React.PropTypes.object
  };
  render() {
    return (
      <header>
        <div className="title">
          <h1>vagy ma?</h1>
        </div>
        <div className="profile">
            <img src={this.props.user.image} />
            <Link to={`/user/${this.props.user.id}`}>
              <p>{this.props.user.name}</p>
            </Link>
        </div>
      </header>
    );
  }
}
