
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    // Get all todos from the server
    axios.get("/api/todos").then((response) => {
      this.setState({ todos: response.data });
    });
  }
  render() {
    return (
      <Router>
        <div>
          <h1>Todo App</h1>
          <TodoList todos={this.state.todos} />
          <TodoForm />
        </div>
      </Router>
    );
  }
}
export default App;