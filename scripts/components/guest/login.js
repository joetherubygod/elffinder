import React, {Component} from 'react';

export default class login extends Component {
  render(){
    return (
      <div className="l">
        <div className="l-container">

          <div className="l-header">login</div>

          <div className="l-body">
            <div className="l-body-row">
              <div>username</div>
              <div><input type="text" /></div>
            </div>
            <div className="l-body-row">
              <div>password</div>
              <div><input type="text" /></div>
            </div>
          </div>

          <div className="l-footer">
            <div>
              <button>cancel</button>
            </div>
            <div>
              <a>forgot password</a>
              <button>login</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
