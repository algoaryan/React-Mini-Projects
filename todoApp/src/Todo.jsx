import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  let [todos, setTodos] = useState([
    { task: "Sample Task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setnewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setnewTodo("");
  };
  let updateTodoValue = (event) => {
    setnewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  let markAsDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone:  true
        };
      })
    );
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let lowerCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toLowerCase(),
        };
      })
    );
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h4 className="todolist">*** Todo List ***</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? {textDecorationLine: "line-through"}: {}}>{todo.task}</span>
            &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            &nbsp; &nbsp;
            <button onClick={() => markAsDone(todo.id)}>DoneTask</button>
          </li>
        ))}
      </ul>
      &nbsp; &nbsp;
      <button onClick={upperCaseAll}>UpperCase All</button>
      &nbsp; &nbsp;
      <button onClick={lowerCaseAll}>LowerCase All</button>
    </div>
  );
}

export default Todo;
