import React from "react";
import { connect } from "react-redux";
import { check, remove } from "../modules/todo";
import TodoList from "../components/ReduxTodo/TodoList";

const TodoListContainer = ({ todos, remove, check }) => {
  return <TodoList remove={remove} success={check} todos={todos} />;
};

export default connect(
  ({todo}) => ({
    todos: todo.todos
  }),
  {
    check,
    remove
  }
)(TodoListContainer);
