import * as types from '../actions/actionTypes.js';

const initialState = {
  messages: [],
  isLoading: true
};

const messagesReducer = function(state = initialState, action){
  switch (action.type) {
    case types.LOAD_MESSAGES:
      return {
        messages: action.messages,
        isLoading: false
      };
    case types.NEW_MESSAGE:
      var messages = [...state.messages, action.message];
      return Object.assign({}, state, { messages: messages });

    case types.MESSAGES_LOADING:
      return Object.assign({}, state, { isLoading: true });
  }
  return state;
};

export default messagesReducer;
