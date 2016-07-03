import {combineReducers} from 'redux';
import messagesReducer from './messagesReducer';
import userReducer from './userReducer';
import userListReducer from './userListReducer';

let reducers = combineReducers({
  messagesStore: messagesReducer,
  userStore: userReducer,
  userListStore: userListReducer
});

export default reducers;
