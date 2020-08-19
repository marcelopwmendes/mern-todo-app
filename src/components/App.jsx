import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./CreateTodo";
import EditTodo from "./EditTodo";
import TodosList from "./ListTodos";

function App() {
  return (
    <Router>
      <div className="container">
        <h2>MERN-Stack TODO App</h2>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" exact component={EditTodo} />
        <Route path="/create" exact component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
