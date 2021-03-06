import React, {Component} from 'react';

export default class Input extends Component {
  static propTypes = {
    clickAddMessage: React.PropTypes.func,
    quickMessagesTogglerClick: React.PropTypes.func
  };
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
  }
  changeInput(event){
    this.setState({
      value: event.target.value
    });
  }
  clickAddMessage(){ // KURVA if scope this and that
    if (this.state.value !== ''){
      console.log(this);
      this.props.clickAddMessage(this.state.value);
    }
  }
  render() {
    return (
      <div className="input">
        <div className="input-left">
          <button className="btn btn-default" onClick={this.props.quickMessagesTogglerClick} >uzenetek</button>
        </div>
        <div className="input-center">
          <input className="form-control" type="text" value={this.state.value} onChange={this.changeInput.bind(this)} />
        </div>
        <div className="input-right">
          <button className="btn btn-default" onClick={this.clickAddMessage.bind(this)}>></button>
        </div>
      </div>
    );
  }
}
