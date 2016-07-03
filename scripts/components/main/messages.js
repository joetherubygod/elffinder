import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as api from '../../api/api';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

class messages extends Component {
  static propTypes = {
    isLoading: React.PropTypes.bool,
    messages: React.PropTypes.array,
    user: React.PropTypes.object,
    userList: React.PropTypes.array
  };
  componentWillMount(){
    api.readUser();
    api.readMessages();
    api.readUserList();
  }
  clickAddMessage(e){
    api.createMessage(e);
  }
  render() {
    return (
      <div>
        <Header user={this.props.user} />
        <Section
          isLoading={this.props.isLoading}
          msgs={this.props.messages}
          user={this.props.user}
          userList={this.props.userList}
        />
        <Footer clickAddMessage={this.clickAddMessage.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = function (store){
  // itt mondjuk meg MIT vegyen ki a store-bol es MIBE (props) rakja
  return {
    // MIBE        -      MIT
    messages: store.messagesStore.messages,
    isLoading: store.messagesStore.isLoading,
    userList: store.userListStore.userList,
    user: store.userStore.user
  };
};

export default connect(mapStateToProps)(messages);
