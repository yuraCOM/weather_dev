import React, { useEffect, useState } from "react";
import ToDoList from "./TODO/todolist";
import "./TODO/todo.css";

import { Context, CurrentTheme } from "./context";
import AddTodo from "./TODO/AddToDo";
import Loader from "./TODO/Loader";

import { ToogleTheme } from "../theme/theme";
import Tools from "../components/Tools/Tools";


function AppToDos() {

  // const [todosX, setTodosX] = React.useState([
  //   { id: 1, completed: false, title: "Купить хлеб" },
  //   { id: 2, completed: false, title: "Купить масло" },
  //   { id: 3, completed: true, title: "Купить молоко" },
  // ]);

  // стейты
  const [todos, setTodos] = React.useState(Tools().getDataLocalStore('todos'));
  const [loading, setLoading] = React.useState(true);

  // useEffect(() => {
  //   // https://jsonplaceholder.typicode.com/posts?_limit=5
  //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  //     .then((response) => response.json())
  //     .then((todos) => {
  //       // console.log(todos);
  //       setTimeout(() => {
  //         setTodos(todos);
  //         setLoading(false);
  //       }, 2000);
  //     });
  // }, []);


  useEffect(() => {
    Tools().setLocalStore('todos', todos)
    setLoading(false);
    setTodos(todos);
  }, [todos])

  //выполнено/ не выполнено
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        // @ts-ignore
        if (todo.id === id) {
          // @ts-ignore
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  // функц удалить дело
  function removeTodo(id) {
    // @ts-ignore
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // функц добавить дело
  function addTodo(title) {
    setTodos(
      // @ts-ignore
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])

    );
    console.log(todos);
  }

  const [currentTheme, setCurrentTheme] = useState("Day");

  return (
    <CurrentTheme.Provider value={[currentTheme, setCurrentTheme]}>
      <Context.Provider value={{ removeTodo: removeTodo }}>
        <div className={currentTheme === "Day" ? "main" : "night-main"}>
          <div
            className={currentTheme === "Day" ? "wrapper" : "wrapper n-wrapper"}
          >
            <ToogleTheme />
            <h3>ToDo</h3>
            <AddTodo todos={todos} addTodo={addTodo} setLocalStore={Tools().setLocalStore} />
            {loading && <Loader />}
            {todos.length ? (
              <ToDoList todos={todos} onToggle={toggleTodo} />
            ) : loading ? null : (
              <p className="ml15px">
                <strong>No ToDo !!!</strong>
              </p>
            )}
          </div>
        </div>
      </Context.Provider>
    </CurrentTheme.Provider>
  );
}

export default AppToDos;
