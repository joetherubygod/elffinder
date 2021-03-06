import React, {Component} from 'react';
import FooterQuickMessages from './FooterQuickMessages';
import FooterInput from './FooterInput';
import FooterToggler from './FooterToggler';

export default class Footer extends Component {
  static propTypes = {
    clickAddMessage: React.PropTypes.func,
    quickMessages: React.PropTypes.array
  };
  constructor(props){
    super(props);
    this.state = {
      showQuickMessages: false,
      showInput: false,
      showToggler: true
    };
  }
  clickQuickMessages(){
    this.setState({
      showQuickMessages: !this.state.showQuickMessages
    });
  }
  clickToggler(){
    this.setState({
      showInput: true,
      showToggler: false
    });
  }
  clickAddMessage(e){
    this.props.clickAddMessage(e);
    this.setState({
      showQuickMessages: false,
      showInput: false,
      showToggler: true
    });
  }
  render(){
    return (
      <footer>
        { this.state.showQuickMessages ?
        <FooterQuickMessages
          clickAddMessage={this.clickAddMessage.bind(this)}
          quickMessages={this.props.quickMessages}
        /> : null }
        { this.state.showInput ?
        <FooterInput
          quickMessagesTogglerClick={this.clickQuickMessages.bind(this)}
          clickAddMessage={this.clickAddMessage}
        /> : null }
        { this.state.showToggler ?
        <FooterToggler
          togglerClick={this.clickToggler.bind(this)}
        /> : null }
      </footer>
    );
  }
}
