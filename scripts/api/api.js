import store from '../store';
import {createMessageAction, readMessagesAction, setLoadingState} from '../actions/messagesActions';
import {createUserAction, readUserAction, updateUserAction} from '../actions/userActions';
import {readUserListAction} from '../actions/userListActions';

export function createMessage(text){
  fetch('http://localhost:4567/messages.json', { method: 'POST', body: JSON.stringify({ text: text }) }).
    then( (r) => r.json() ).
    then( (data) => {
      store.dispatch(createMessageAction(data));
    });
}

export function readMessages(){
  store.dispatch(setLoadingState());
  fetch('http://localhost:4567/messages.json').
    then( (r) => r.json() ).
    then( (data) => {
      store.dispatch(readMessagesAction(data));
    });
}

export function createUser(user){
  fetch('http://localhost:4567/register.json', { method: 'POST', body: JSON.stringify(user) }).
    then( (r) => r.json() ).
    then( (data) => {
      store.dispatch(createUserAction(data));
    });
}

export function readUser(){
  fetch('http://localhost:4567/user.json').
    then( (r) => r.json() ).
    then( (data) => {
      store.dispatch(readUserAction(data));
    });
}

export function updateUser(user){
  fetch(`http://localhost:4567/user/${user.id}`, { method: 'POST', body: JSON.stringify(user) }).
    then( (r) => r.json() ).
    then( (data) => {
      store.dispatch(updateUserAction(data));
    });
}

export function readUserList(userList){
  fetch('http://localhost:4567/userlist.json').
    then( (r) => r.json() ).
    then( (data) => {
      store.dispatch(readUserListAction(data));
    });
}
