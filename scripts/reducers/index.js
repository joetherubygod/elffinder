import {combineReducers} from 'redux';
import messagesReducer from './messagesReducer';

var reducers = combineReducers({
  messagesStore: messagesReducer
});

export default reducers;
