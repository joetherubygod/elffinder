import React, {Component} from 'react';

export default class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
    this.changeInput = this.changeInput.bind(this);
    this.clickAddMessage = this.clickAddMessage.bind(this);
  }
  changeInput(event){
    this.setState({
      value: event.target.value
    });
  }
  clickAddMessage(value){
    this.props.clickAddMessage(this.state.value);
  }
  render() {
    return (
      <div className="input">
        <div className="input-left"><button className="btn btn-default" onClick={this.props.quickMessagesTogglerClick} >uzenetek</button></div>
        <div className="input-center"><input className="form-control" type="text" value={this.state.value} onChange={this.changeInput} /></div>
        <div className="input-right"><button className="btn btn-default" onClick={this.clickAddMessage}>></button></div>
      </div>
    );
  }
}
