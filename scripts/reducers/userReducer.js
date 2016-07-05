import * as types from '../actions/actionTypes.js';

const initialState = {
  user: {}
};

const userReducer = function (state = initialState, action){
  switch (action.type) {
    case types.READ_USER:
      return Object.assign({}, state, { user: action.user });

    case types.LOGIN_USER:
      return Object.assign({}, state, { user: action.user });

    case types.LOGOUT_USER:
      console.log('loggin out');
      return {};

    case types.UPDATE_USER:
      //let user = Object.assign({}, state.user, action.user);
      return Object.assign({}, state, { user: action.user });//action.user user helyett?
  }
  return state;
};

export default userReducer;
