import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, fetchMessages } from '../actions';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (event) => {
    this.props.selectChannel(event.target.lastChild.data);
  }

  renderChannel = (channel) => {
    return(
      <li
      onClick={this.handleClick}
      key={channel}
      className={channel === this.props.selectedChannel ? 'active' : null}
      role="presentation"
      >
        #{channel}
      </li>
    )
  }

  render () {
    return(
      <div className='channels-container'>
        <ul>
          {this.props.channels.map(this.renderChannel)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel: selectChannel,
      fetchMessages: fetchMessages
     },
    dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
