import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as api from './api/api';
import store from './store';
import Section from './Section';
import Footer from './Footer';

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      userList: [],
    };
    this.clickAddMessage = this.clickAddMessage.bind(this);
  }
  componentWillMount(){
    api.fetchMessages();

    fetch('http://localhost:4567/user.json').
      then( (r) => r.json() ).
      then( (data) => {
          this.setState({
            user: data
          });
      });
    fetch('http://localhost:4567/userlist.json').
      then( (r) => r.json() ).
      then( (data) => {
          this.setState({
            userList: data
          });
      });
  }
  clickAddMessage(e){
    api.createMessage(e);
  }
  render() {
    return (
      <div>
        <Section
          isLoading={this.props.isLoading}
          msgs={this.props.messages}
          user={this.state.user}
          userList={this.state.userList} />
        <Footer clickAddMessage={this.clickAddMessage} />
      </div>
    );
  }
}

const mapStateToProps = function(store){
  // itt mondjuk meg MIT vegyen ki a store-bol es MIBE (props) rakja
  return {
    // MIBE        -      MIT
    messages: store.messagesStore.messages,
    isLoading: store.messagesStore.isLoading
  }
};

export default connect(mapStateToProps)(Content);
