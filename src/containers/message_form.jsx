import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.channel, this.props.author, this.state.value);
    this.setState({ value: '' });
  }

  componentDidMount = () => {
    this.messageBox.focus();
  }

  render () {
    return(
      <div>
        <form onSubmit={this.handleSubmit} className='channel-editor'>
          <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className='form-control'
          ref={(input) => {this.messageBox = input; }}
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    author: state.currentUsername,
    channel: state.selectedChannel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
