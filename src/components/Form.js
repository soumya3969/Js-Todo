import React from "react";

const Form = ({ input, setInput, todos, setTodos }) => {

    const onInputChange = (event) => {
        //! setInput(event.target.in)
    }
  return (
    <form>
      <input
        type="text"
        placeholder="Enter a Todo...."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
