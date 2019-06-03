import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {
  fetchMessages = () => {
    this.props.fetchMessages(this.props.channel);
  }

  componentWillMount = () => {
    this.fetchMessages();
  }

  componentDidMount = () => {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentWillUnmount = () => {
    clearInterval(this.refresher);
  }

  componentDidUpdate = () => {
    this.list.scrollTop = this.list.scrollHeight;
  }

  render() {
    return (
      <div className='channel-container'>
        <div className="channel-title">
          <span>Channel #{this.props.channel}</span>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {this.props.messages.map((message) => <Message message={message} key={message.id} />)}
        </div>
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