import React, {Component} from 'react';

export default class register extends Component {
  render(){
    return (
      <div className="l">
        <div className="l-container">

          <div className="l-header">registration</div>

          <div className="l-body">
            <div className="l-body-row">
              <div>username</div>
              <div><input type="text" /></div>
            </div>
            <div className="l-body-row">
              <div>password</div>
              <div><input type="text" /></div>
            </div>
            <div className="l-body-row">
              <div>password confirmation</div>
              <div><input type="text" /></div>
            </div>
            <div className="l-body-row">
              <div>e-mail</div>
              <div><input type="text" /></div>
            </div>
          </div>

          <div className="l-footer">
            <div>
              <button>cancel</button>
            </div>
            <div>
              <button>save</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
