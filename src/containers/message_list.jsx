import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

import Message from '../components/message';

class MessageList extends Component {
  componentWillMount = () => {
    this.props.fetchMessages(this.props.channel);
  }
  render() {
    return (
      <div>
        {this.props.messages.map((message) => <Message message={message} key={message.created_at} />)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    channel: state.selectedChannel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages},
    dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
