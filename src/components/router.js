import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Role from './Role'; //1° Screen Role - component
import WaiterList from './WaiterList'; //2° Screen Waiter List - component
import WaiterUI from './WaiterUI'; //3° Screen Waiter UI - component

const AppRouter = () => {
  return (
    
    <Router>
        <Route exact path="/" component={Role} />
        <Route path="/waiterlist" component={WaiterList} />
        <Route path="/waiter-home" component={WaiterUI} />
    </Router>
  );
}

export default AppRouter;


/* <ul>
          <li>
            <Link to="/">Role</Link>
          </li>
          <li>
            <Link to="/waiterlist">WaiterList</Link>
          </li>
          <li>
            <Link to="/waiter-home">WaiterUI</Link>
          </li>
        </ul> */