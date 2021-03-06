// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';


// State and reducers
import ChannelsReducer from './reducers/channels_reducer';
import CurrentUsernameReducer from './reducers/current_username_reducer';
import MessagesReducer from './reducers/messages_reducer';
import SelectedChannelReducer from './reducers/selected_channel_reducer';

const initialState = {
  messages: [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  channels: [ 'general' , 'redux' , 'paris' ],
  selectedChannel: 'general',
  currentUsername: prompt('Quel est votre pseudo ?') || 'toto'
};

const reducers = combineReducers({
  messages: MessagesReducer,
  channels: ChannelsReducer,
  selectedChannel: SelectedChannelReducer,
  currentUsername: CurrentUsernameReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
