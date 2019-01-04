import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App";
import About from "./About";

const RouterList = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default RouterList;
