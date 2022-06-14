import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./todo.css";
import { Context, CurrentTheme } from "../context";

function ToDoItem({ todo, index, onChange }) {
  // https://ru.stackoverflow.com/questions/996520/%D0%9A%D0%B0%D0%BA-%D0%BB%D1%83%D1%87%D1%88%D0%B5-%D0%BF%D1%80%D0%BE%D0%BF%D0%B8%D1%81%D1%8B%D0%B2%D0%B0%D1%82%D1%8C-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0-%D0%B2-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B5-react
  // console.log("todo ", todo);
  let { removeTodo } = useContext(Context);
  let classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  let [currentTheme, setCurrentTheme] = useContext(CurrentTheme);

  return (
    <li>
      <span className={classes.join(" ")}>
        <input
          type={"checkbox"}
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}. </strong>
        {todo.title}
      </span>
      <button type="button" className="btn btn-danger" onClick={() => removeTodo(todo.id)}>x</button>
    </li >
  );
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default ToDoItem;
