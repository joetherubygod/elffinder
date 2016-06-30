import * as types from './actionTypes';


export function getMessages(messages){
  return {
    type: types.LOAD_MESSAGES,
    messages: messages
  };
}

export function setLoadingState(){
  return {
    type: types.MESSAGES_LOADING
  };
}

export function setNewMessage(message){
  return {
    type: types.NEW_MESSAGE,
    message: message
  };
}
