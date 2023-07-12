import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Todo from "./Todo";
class TodoList extends Component {
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
      <ul>
        {this.state.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}
export default TodoList;