import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import store from './store';
import {addList, addCard} from './actions';
import './index.css';

store.dispatch(addList('Test list'));
store.dispatch(addCard('Test card', 2));
console.log(store.getState());


ReactDOM.render(
  <Board />,
  document.getElementById('root')
);
