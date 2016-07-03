import * as types from '../actions/actionTypes';

const initialState = {
  userList: []
};

const userListReducer = function (state = initialState, action){
  switch (action.type) {
    case types.READ_USERLIST:
      return {
        userList: action.userList
      };
  }
  return state;
};

export default userListReducer;
