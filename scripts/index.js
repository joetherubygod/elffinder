import React from 'react';
import {render} from 'react-dom';
import App from './App';

render(
  <App msgs={[{ user: "piro",text: "fasza",key: 0 },{ user: "verse", text: "isteni", key: 1 }]} user={{ name: "kecs", id: 0 }} userList={[{ name: "kecs", available: false, id: 0 },{ name: "neu", available: true, id: 1 },{ name: "elf", available: false, id: 2 }]} />,
  document.getElementById('root')
);
