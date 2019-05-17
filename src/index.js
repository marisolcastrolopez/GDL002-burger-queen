import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Role from './components/chooseRole';
import * as serviceWorker from './serviceWorker';
// import "antd/dist/antd.css";
// import { Row, Col } from "antd";

ReactDOM.render(
  <div className="App">
    <h1>What's up</h1>
    <Role />
    <App />
  </div>
,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
