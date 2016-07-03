import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as api from '../../api/api';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userNameValue: '',
      userPasswordValue: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      browserHistory.push('/');
    }
  }
  changeInput(stateName, value){
    let hash = {};
    hash[stateName] = value.target.value;
    this.setState(hash);
  }
  login(){
    let loginInfo = {
      name: this.state.userNameValue,
      password: this.state.userPasswordValue
    };

    api.loginUser(loginInfo);
  }
  render(){
    return (
      <div className="l">
        <div className="l-container">

          <div className="l-header">login</div>

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
          </div>

          <div className="l-footer">
            <div>
              <button>cancel</button>
            </div>
            <div>
              <a>forgot password</a>
              <button onClick={this.login.bind(this)}>login</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
const mapStateToProps = function (store){
  return {
    user: store.userStore.user
  };
};

export default connect(mapStateToProps)(Login);
