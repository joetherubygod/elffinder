import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import * as api from '../../api/api';

export default class register extends Component {
  constructor(props){
    super(props);

    this.state = {
      userNameValue: '',
      userPasswordValue: '',
      userPasswordCValue: '',
      userEmailValue: ''
    };
  }
  changeInput(stateName, value){
    let hash = {};
    hash[stateName] = value.target.value;
    this.setState(hash);
  }
  register(){
    if (this.state.userPasswordValue === this.state.userPasswordCValue){
      let registerInfo = {
        name: this.state.userNameValue,
        password: this.state.userPasswordValue,
        email: this.state.userEmailValue
      };
      api.createUser(registerInfo, () => {
        browserHistory.push('/login');
      });
    }
  }
  cancel(){
    browserHistory.push('/login');
  }
  render(){
    return (
      <div className="l">
        <div className="l-container">

          <div className="l-header">registration</div>

          <div className="l-body">
            <div className="l-body-row">
              <div>username</div>
              <div>
                <input type="text"
                  value={this.state.userNameValue}
                  onChange={this.changeInput.bind(this, 'userNameValue')}
                />
              </div>
            </div>
            <div className="l-body-row">
              <div>password</div>
              <div>
                <input type="password"
                  value={this.state.userPasswordValue}
                  onChange={this.changeInput.bind(this, 'userPasswordValue')}
                />
              </div>
            </div>
            <div className="l-body-row">
              <div>password confirmation</div>
              <div>
                <input type="password"
                  value={this.state.userPasswordCValue}
                  onChange={this.changeInput.bind(this, 'userPasswordCValue')}
                />
              </div>
            </div>
            <div className="l-body-row">
              <div>e-mail</div>
              <div>
                <input type="text"
                  value={this.state.userEmailValue}
                  onChange={this.changeInput.bind(this, 'userEmailValue')}
                />
              </div>
            </div>
          </div>

          <div className="l-footer">
            <div>
              <button onClick={this.cancel.bind(this)}>cancel</button>
            </div>
            <div>
              <button onClick={this.register.bind(this)}>register</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
