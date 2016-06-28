import React, {Component} from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      msgs: [],
      user: '',
      userList: [],
      isMessagesLoading: true
    };
    this.clickAddMessage = this.clickAddMessage.bind(this);
  }
  componentWillMount(){
    fetch('http://localhost:4567/messages.json').
      then( (r) => r.json() ).
      then( (data) => {
          this.setState({
            isMessagesLoading: false,
            msgs: data
          });
      });
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
    let msgs = this.state.msgs;
    fetch('http://localhost:4567/messages.json', { method: 'POST', body: JSON.stringify({ text: e }) }).
      then( (r) => r.json() ).
      then( (data) => {
        msgs.push(data);

        this.setState({
          msgs: msgs
        });
      });
  }
  render() {
    return (
      <div>
        <Header user={this.state.user} />
        <Section
          isLoading={this.state.isMessagesLoading}
          msgs={this.state.msgs}
          user={this.state.user}
          userList={this.state.userList} />
        <Footer clickAddMessage={this.clickAddMessage} />
      </div>
    );
  }
}
