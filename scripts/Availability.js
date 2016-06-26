import React, {Component} from 'react';

export default class Availability extends Component {
  constructor(props){
    super(props);
    this.state = {
      available: this.props.available
    };
    this.clickAvailable = this.clickAvailable.bind(this);
  }
  clickAvailable(){
    this.setState({
      available: !this.state.available
    });
  }
  render() {
    return (
      <div>
        { this.state.available ?
          <button className="btn btn-success" onClick={this.clickAvailable} >leszek</button>
        :
          <button className="btn btn-danger" onClick={this.clickAvailable} >nem leszek</button>
        }
      </div>
    );
  }
}
