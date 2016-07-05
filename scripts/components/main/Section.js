import React, {Component} from 'react';
import SectionDate from './SectionDate';
import SectionAvailability from './SectionAvailability';
import SectionTable from './SectionTable';
import SectionMessages from './SectionMessages';

export default class Section extends Component {
  static propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    messages: React.PropTypes.array,
    userList: React.PropTypes.array,
    user: React.PropTypes.object,
    clickChangeAvailability: React.PropTypes.func
  };
  clickChangeAvailability(e){
    this.props.clickChangeAvailability(e);
  }
  render(){
    return (
      <section>
        <SectionDate/>
        <SectionAvailability
          user={this.props.user}
          userList={this.props.userList}
          clickChangeAvailability={this.clickChangeAvailability.bind(this)}
        />
        <SectionTable
          user={this.props.user}
          userList={this.props.userList}
        />
        <SectionMessages
          isLoading={this.props.isLoading}
          messages={this.props.messages}
          userList={this.props.userList}
        />
      </section>
    );
  }
}
