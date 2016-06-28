import React, {Component} from 'react';
import FooterQuickMessages from './FooterQuickMessages';
import FooterInput from './FooterInput';
import FooterToggler from './FooterToggler';

export default class Footer extends Component {
  static propTypes = {
    clickAddMessage: React.PropTypes.func
  };
  constructor(props){
    super(props);
    this.state = {
      showQuickMessages: false,
      showInput: false,
      showToggler: true
    };
    this.clickQuickMessages = this.clickQuickMessages.bind(this);
    this.clickToggler = this.clickToggler.bind(this);
    this.clickAddMessage = this.clickAddMessage.bind(this);
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
        { this.state.showQuickMessages ? <FooterQuickMessages
          clickAddMessage={this.clickAddMessage}
          list={[{text: 'menj anyadba', key: 1}, {text: 'nem erek ra kurvara', key: 2}, {text: 'kurodj meg', key: 3}]}
        /> : null }
        { this.state.showInput ? <FooterInput
          quickMessagesTogglerClick={this.clickQuickMessages}
          clickAddMessage={this.clickAddMessage}
        /> : null }
        { this.state.showToggler ? <FooterToggler
          togglerClick={this.clickToggler}
        /> : null }
      </footer>
    );
  }
}
