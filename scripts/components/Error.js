import React, {Component} from 'react';

export default class Error extends Component {
  static propTypes = {
    errors: React.PropTypes.string
  };
  render() {
    switch (this.props.errors){
      case 'passwordmiss':
        return (
          <div className="error-container">
            * a jelszo nem egyezik
          </div>
        );
      case 'passwordnull':
      return (
        <div className="error-container">
          * a jelszo nem lehet ures
        </div>
      );
    }
    return null;
  }
}
