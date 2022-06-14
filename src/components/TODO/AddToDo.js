import React, { useState } from "react";
import PropTypes from "prop-types";
// import Tools from "../Tools/Tools";

function AddTodo(props) {

  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    if (value.trim()) {
      props.addTodo(value);
      setValue("");
    }
    // props.setLocalStore('todos', props.todos)

  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit" className="btn btn-success">Add todo</button>
    </form>
  );
}

AddTodo.propTypes = {
  // onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
