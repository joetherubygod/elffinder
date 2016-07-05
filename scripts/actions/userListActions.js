import * as types from './actionTypes';

export function readUserListAction(userList){
  return {
    type: types.READ_USERLIST,
    userList: userList
  };
}

export function updateUserListAction(userid){
  return {
    type: types.UPDATE_USERLIST,
    userid: userid
  };
}
