import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as api from '../../api/api';
import Header from './Header';
import Error from '../Error';

class User extends Component {
  static propTypes = {
    user: React.PropTypes.object
  };
  constructor(props){
    super(props);
    this.state = {
      errors: '',

      userNameValue: '',
      userPasswordValue: '',
      userPasswordCValue: '',
      userEmailValue: '',
      userImageValue: ''
    };
  }
  componentWillMount(){
    api.readUser();
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      userNameValue: nextProps.user.name,
      userEmailValue: nextProps.user.email,
      userImageValue: nextProps.user.image
    });
  }
  changeInput(stateName, value){
    let hash = {};
    hash[stateName] = value.target.value;
    this.setState(hash);
  }
  save(){
    if ((this.state.userPasswordValue !== '') && this.state.userPasswordValue === this.state.userPasswordCValue) {
      let newUserData = {
        id: this.props.user.id,
        name: this.state.userNameValue,
        password: this.state.userPasswordValue,
        email: this.state.userEmailValue,
        image: this.state.userImageValue
      };

        api.updateUser(newUserData, () => {
        browserHistory.push('/');
      });
    }
    else if ((this.state.userPasswordValue === '') && this.state.userPasswordValue === this.state.userPasswordCValue) {
      this.setState({
        errors: 'passwordnull'
      });
    }
    else {
      this.setState({
        errors: 'passwordmiss'
      });
    }
  }
  logout(){
    api.logout(() => {
      browserHistory.push('/login');
    });
  }
  cancel(){
    browserHistory.push('/');
  }
  render(){
    return (
      <div>
      <Header user={this.props.user} />
      <div className="l">

        <Error errors={this.state.errors} />

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
                <input type="password"
                  value={this.state.userPasswordValue}
                  className={this.state.errors}
                  onChange={this.changeInput.bind(this, 'userPasswordValue')}
                />
              </div>
            </div>
            <div className="l-body-row">
              <div>password confirmation</div>
              <div>
                <input type="password"
                  value={this.state.userPasswordCValue}
                  className={this.state.errors}
                  onChange={this.changeInput.bind(this, 'userPasswordCValue')}
                />
              </div>
            </div>
            <div className="l-body-row">
              <div>pic</div>
              <div>
                <input type="text"
                  value={this.state.userImageValue}
                  onChange={this.changeInput.bind(this, 'userImageValue')}
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
              <button onClick={this.logout.bind(this)}>logout</button>
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
