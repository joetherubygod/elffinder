import * as types from '../actions/actionTypes.js';

const initialState = {
  user: {}
};

const userReducer = function (state = initialState, action){
  switch (action.type) {
    case types.READ_USER:
      return {
        user: action.user
      };
    case types.CREATE_USER:
      return {
        user: action.user
      };
    case types.UPDATE_USER:
      let user = action.user;
      return Object.assign({}, state, { user: user });
  }
  return state;
};

export default userReducer;
