import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {
  componentWillMount = () => {
    this.props.fetchMessages(this.props.channel);
  }
  render() {
    return (
      <div className='channel-container'>
        {this.props.messages.map((message) => <Message message={message} key={message.id} />)}
        <MessageForm />
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
