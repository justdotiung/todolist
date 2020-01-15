import React from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, remove, success }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          remove={remove}
          success={success}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
