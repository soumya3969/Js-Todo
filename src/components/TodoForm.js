import React, { Component } from "react";
import axios from "axios";
import { Form, Input} from "antd";
class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    // Create the todo on the server
    axios.post("/api/todos", {
      title: this.state.title,
    }).then((response) => {
      // Add the todo to the state
      this.props.todos.push(response.data);
      // Clear the form
      this.setState({ title: "" });
    });
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          placeholder="What do you need to do?"
          value={this.state.title}
          onChange={(e) => {
            this.setState({ title: e.target.value });
          }}
        />
        <button type="submit">Create Todo</button>
      </Form>
    );
  }
}
export default TodoForm;