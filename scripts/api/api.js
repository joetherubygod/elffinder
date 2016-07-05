import store from '../store';
import {createMessageAction, readMessagesAction, setLoadingState} from '../actions/messagesActions';
import {loginUserAction, readUserAction, updateUserAction, logoutUserAction} from '../actions/userActions';
import {readUserListAction, updateUserListAction} from '../actions/userListActions';

export function createMessage(text){              // cookiek (encrypted user_id) tovabbkuldese
  fetch('http://localhost:4567/messages.json', {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({ text: text }) }).
    then( (r) => r.json() ).
    then( (data) => {
      store.dispatch(createMessageAction(data));
    });
}

export function readMessages(){
  store.dispatch(setLoadingState());
  fetch('http://localhost:4567/messages.json', { credentials: 'include' }).
    then( (r) => r.json() ).
    then( (data) => {
      store.dispatch(readMessagesAction(data));
    });
}

export function loginUser(user){
  fetch('http://localhost:4567/login.json', { credentials: 'include', method: 'POST', body: JSON.stringify(user) }).
    then( (r) => r.json() ).
    then( (data) => {
      store.dispatch(loginUserAction(data));
    });
}

export function logout(redirect){
  fetch('http://localhost:4567/logout', { credentials: 'include' }).
    then( () => {
      redirect();
      store.dispatch(logoutUserAction());
    });
}

export function createUser(user, redirect){
  fetch('http://localhost:4567/register.json', { credentials: 'include', method: 'POST', body: JSON.stringify(user) }).
    then( (r) => r.json() ).
    then( (data) => {
      console.log(data);
      redirect();
    });
}

export function readUser(){
  fetch('http://localhost:4567/user.json', { credentials: 'include' }).
    then( (r) => r.json() ).
    then( (data) => {
      store.dispatch(readUserAction(data));
    });
}

export function updateUser(user, redirect){
  fetch(`http://localhost:4567/user/${user.id}`, {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(user) }).
    then( (r) => r.json() ).
    then( (data) => {
      store.dispatch(updateUserAction(data));
      redirect();
    });
}

export function readUserList(){
  fetch('http://localhost:4567/userlist.json', { credentials: 'include' }).
    then( (r) => r.json() ).
    then( (data) => {
      store.dispatch(readUserListAction(data));
    });
}

export function updateUserList(userid){
  fetch(`http://localhost:4567/userlist.json`, {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({ id: userid }) }).
    then( (r) => r.json() ).
    then( (data) => {
      console.log(data);
      store.dispatch(updateUserListAction(userid));
    });
}
