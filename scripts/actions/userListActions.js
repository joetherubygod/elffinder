import * as types from './actionTypes';

export function readUserListAction(userList){
  return {
    type: types.READ_USERLIST,
    userList: userList
  };
}
