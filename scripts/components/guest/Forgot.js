import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import * as api from '../../api/api';

export default class Forgot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };
  }
  changeInput(event){
    this.setState({
      email: event.target.value
    });
  }
  send(){
    // nem lehet ures hogy mert scoooooooooope itt is baszdmeg ifnel this.
    api.forgotPassword(this.state.email);
  }
  cancel(){
    browserHistory.push('/login');
  }
  render(){
    return (
      <div className="l">
        <div className="l-container">

          <div className="l-header">forgot pw</div>

          <div className="l-body">
            <div className="l-body-row">
              <div>email</div>
              <div>
                <input type="text"
                  value={this.state.email}
                  onChange={this.changeInput.bind(this)}
                />
              </div>
            </div>
          </div>

          <div className="l-footer">
            <div>
              <button onClick={this.cancel.bind(this)}>cancel</button>
            </div>
            <div>
              <button onClick={this.send.bind(this)}>send</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
