import {combineReducers} from 'redux';
import messagesReducer from './messagesReducer';
import userReducer from './userReducer';
import userListReducer from './userListReducer';
import quickMessagesReducer from './quickMessagesReducer';

let reducers = combineReducers({
  messagesStore: messagesReducer,
  userStore: userReducer,
  userListStore: userListReducer,
  quickMessagesStore: quickMessagesReducer
});

export default reducers;
