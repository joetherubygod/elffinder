import store from '../store';
import {getMessages,setLoadingState,setNewMessage} from '../actions/messagesActions';

export function fetchMessages(){
  store.dispatch(setLoadingState());
  fetch('http://localhost:4567/messages.json').
    then( (r) => r.json() ).
    then( (data) => {
      store.dispatch(getMessages(data));
    });
}

export function createMessage(text){
  fetch('http://localhost:4567/messages.json', { method: 'POST', body: JSON.stringify({ text: text }) }).
    then( (r) => r.json() ).
    then( (data) => {
      store.dispatch(setNewMessage(data));
    });
}
