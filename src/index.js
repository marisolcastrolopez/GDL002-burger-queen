import React from 'react';  
import ReactDOM from 'react-dom';
// import './styles.css'; //Stylesheet for index.js
// import {Role} from './components/Role'; //1° Screen Role - component
import * as serviceWorker from './serviceWorker';
// import {WaiterList} from './components/WaiterList';
// import {WaiterUI} from './components/WaiterUI';
import BasicExample from './components/router'


ReactDOM.render(
  <BasicExample />
  ,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
