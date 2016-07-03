import * as types from './actionTypes';

export function loginUserAction(user){
  return {
    type: types.LOGIN_USER,
    user: user
  };
}

export function readUserAction(user){
  return {
    type: types.READ_USER,
    user: user
  };
}

export function logoutUserAction() {
  return {
    type: types.LOGOUT_USER
  };
}

export function updateUserAction(user){
  return {
    type: types.UPDATE_USER,
    user: user
  };
}
