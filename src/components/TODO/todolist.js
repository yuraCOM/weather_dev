import React from "react";
import PropTypes from "prop-types";
import "./todo.css";
import ToDoItem from "../TODO/todoitem";

function ToDoList(props) {
  
  return (
    <div>
      {/* <h3>ToDo</h3> */}
      <ul>
        {props.todos.map((todo, index) => {
          return (
            <ToDoItem
              todo={todo}
              key={todo.id}
              index={index}
              onChange={props.onToggle}
            />
          );
        })}
      </ul>
    </div>
  );
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ToDoList;
