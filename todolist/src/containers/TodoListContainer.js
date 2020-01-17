import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { check, remove } from "../modules/todo";
import TodoList from "../components/ReduxTodo/TodoList";

const TodoListContainer = () => {
 
  const {todos} = useSelector(({todo}) => ({
    todos: todo.todos
  }));

  const dispatch = useDispatch();
  const onRemove = useCallback(id => dispatch(remove(id)),[dispatch]);
  const onCheck = useCallback(id => dispatch(check(id)),[dispatch]);

  return <TodoList remove={onRemove} success={onCheck} todos={todos} />;
};

export default React.memo(TodoListContainer);