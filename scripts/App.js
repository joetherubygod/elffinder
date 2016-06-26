import React, {Component} from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      msgs: this.props.msgs,
      user: this.props.user
    };
    this.clickAddMessage = this.clickAddMessage.bind(this);
  }
  clickAddMessage(e){
    var msgs = this.state.msgs;
    var key = msgs.length;
    msgs.push({
      user: this.state.user.name,
      text: e,
      key: key
    });

    this.setState({
      msgs: msgs
    });
  }
  render() {
    return (
      <div>
        <Header user={this.props.user} />
        <Section msgs={this.props.msgs} user={this.props.user} userList={this.props.userList} />
        <Footer clickAddMessage={this.clickAddMessage} />
      </div>
    );
  }
}
