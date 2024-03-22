import "./App.css";
import { useState } from "react";

function Todo() {
  let [todos, setTodos] = useState()



  return (
    <div>
      <input placeholder="add a task"></input>
      <button>Add Task</button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h4 className="todolist">*** Todo List ***</h4>
      <ul></ul>
    </div>
  );
}

export default Todo;
