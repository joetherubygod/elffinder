import * as types from './actionTypes';

export function creatUserAction(user){
  return {
    type: types.CREATE_USER,
    user: user
  };
}

export function readUserAction(user){
  return {
    type: types.READ_USER,
    user: user
  };
}

export function updateUserAction(user){
  return {
    type: types.UPDATE_USER,
    user: user
  };
}
