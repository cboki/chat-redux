import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChannelList extends Component {

  renderChannel = (channel) => {
    return(
      <li
      key={channel}
      className={channel === this.props.selectedChannel ? 'active' : null}
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { createMessage: createMessage },
//     dispatch
//     );
// }

export default connect(mapStateToProps)(ChannelList);
