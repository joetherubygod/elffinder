import * as types from '../actions/actionTypes.js';

const initialState = {
  messages: [],
  isLoading: true
};

const messagesReducer = function (state = initialState, action){
  switch (action.type) {
    case types.READ_MESSAGES:
      return {
        messages: action.messages,
        isLoading: false
      };

    case types.CREATE_MESSAGE:
        let messages = [...state.messages, action.message];
        return Object.assign({}, state, { messages: messages });

    case types.MESSAGES_LOADING:
      return Object.assign({}, state, { isLoading: true });
  }
  return state;
};

export default messagesReducer;
