import { Link } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }
  handleEditClick() {
    this.setState({ isEditing: true });
  }
  handleDeleteClick() {
    // Delete the todo from the server
    axios.delete(`/api/todos/${this.props.todo.id}`).then(() => {
      // Remove the todo from the state
      this.props.todos.splice(this.props.index, 1);
    });
  }
  render() {
    const { todo, index } = this.props;
    if (this.state.isEditing) {
      return (
        <div>
          <input
            type="text"
            value={todo.title}
            onChange={(e) => {
              this.props.onUpdate(index, e.target.value);
            }}
          />
          <button onClick={this.handleEditClick}>Save</button>
          <button onClick={this.handleDeleteClick}>Delete</button>
        </div>
      );
    } else {
      return (
        <li>
          <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
          <button onClick={this.handleEditClick}>Edit</button>
          <button onClick={this.handleDeleteClick}>Delete</button>
        </li>
      );
    }
  }
}
export default Todo;