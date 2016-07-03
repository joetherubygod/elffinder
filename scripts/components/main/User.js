import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as api from '../../api/api';
import Header from './Header';

class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      userNameValue: '',
      userPasswordValue: '',
      userPasswordCValue: '',
      userEmailValue: ''
    };
  }
  componentWillMount(){
    api.readUser();
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      userNameValue: nextProps.user.name,
      userPasswordValue: nextProps.user.password,
      userEmailValue: nextProps.user.email
    });
  }
  changeInput(stateName, value){
    let hash = {};
    hash[stateName] = value.target.value;
    this.setState(hash);
  }
  save() {
    if (this.state.userPasswordValue === this.state.userPasswordCValue) {
      let newUserData = {
        id: this.props.user.id,
        name: this.state.userNameValue,
        password: this.state.userPasswordValue,
        email: this.state.userEmailValue
      };
      api.updateUser(newUserData);
    }
  }
  render() {
    return (
      <div>
      <Header user={this.props.user} />
      <div className="l">
        <div className="l-container">

          <div className="l-header">profile</div>

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
                <input type="text"
                  value={this.state.userPasswordValue}
                  onChange={this.changeInput.bind(this, 'userPasswordValue')}
                />
              </div>
            </div>
            <div className="l-body-row">
              <div>password confirmation</div>
              <div>
                <input type="text"
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
              <button>cancel</button>
            </div>
            <div>
              <button onClick={this.save.bind(this)}>save</button>
            </div>
          </div>

        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = function (store){
  // itt mondjuk meg MIT vegyen ki a store-bol es MIBE (props) rakja
  return {
    // MIBE        -      MIT
    user: store.userStore.user
  };
};

export default connect(mapStateToProps)(User);
