import * as types from '../actions/actionTypes';

const initialState = {
  userList: []
};

const userListReducer = function (state = initialState, action){
  switch (action.type) {
    case types.READ_USERLIST:
      return Object.assign({}, state, { userList: action.userList });

    case types.UPDATE_USERLIST:
    //  let index = state.userList.findIndex(a => a.id === action.userid);
    //  let newUserList = state.userList;
    //  newUserList[index].availability = !newUserList[index].availability;
      let user = state.userList.find((a) => a.id === action.userid);
      user.availability = !user.availability;
      let userList = [...state.userList, user];
      return Object.assign({}, state, { userList: userList });
  }
  return state;
};

export default userListReducer;
