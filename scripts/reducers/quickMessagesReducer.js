import * as types from '../actions/actionTypes.js';

const quickMessagesReducer = function (state=[], action){
  switch (action.type) {
    case types.READ_QUICKMESSAGES:
      return Object.assign({}, state, { quickMessages: action.quickMessages });

    default:
      return state;
  }
};

export default quickMessagesReducer;
