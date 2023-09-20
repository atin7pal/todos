import React, { Fragment } from "react";
import TodoList from "../component/todolist";
import Loader from "../component/loaders";
import "./styles.css";
const App = () => {
  return (
    <Fragment>
      <TodoList />
    </Fragment>
  );
};

export default App;
