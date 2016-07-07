import * as types from './actionTypes';


export function readQuickMessagesAction(quickMessages){
  return {
    type: types.READ_QUICKMESSAGES,
    quickMessages: quickMessages
  };
}
