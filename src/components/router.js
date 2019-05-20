import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Role from './Role'; //1° Screen Role - component
import WaiterList from './WaiterList';
import WaiterUI from './WaiterUI';

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Role</Link>
          </li>
          <li>
            <Link to="/waiterlist">WaiterList</Link>
          </li>
          <li>
            <Link to="/waiter-home">WaiterUI</Link>
          </li>
        </ul>

        

        <Route exact path="/" component={Role} />
        <Route path="/waiterlist" component={WaiterList} />
        <Route path="/waiter-home" component={WaiterUI} />
      </div>
    </Router>
  );
}

export default BasicExample;
