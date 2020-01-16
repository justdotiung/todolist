import React from "react";
import { connect } from "react-redux";
import { success, remove } from "../modules/todo";
import TodoList from "../components/ReduxTodo/TodoList";

const TodoListContainer = ({ todos, remove, success }) => {
  return <TodoList remove={remove} success={success} todos={todos} />;
};

export default connect(
  ({todos}) => ({
    todos: todos.todos
  }),
  {
    success,
    remove
  }
)(TodoListContainer);
