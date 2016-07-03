import * as types from './actionTypes';


export function readMessagesAction(messages){
  return {
    type: types.READ_MESSAGES,
    messages: messages
  };
}

export function createMessageAction(message){
  return {
    type: types.CREATE_MESSAGE,
    message: message
  };
}

export function setLoadingState(){
  return {
    type: types.MESSAGES_LOADING
  };
}
