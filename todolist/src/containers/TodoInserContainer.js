import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insert } from "../modules/todo";
import TodoInsert from "../components/ReduxTodo/TodoInsert";

const TodoInserContainer = () => {
  const { todos } = useSelector(({ todo }) => ({
    todos: todo.todos
  }));

  const dispatch = useDispatch();
  const onInsert = useCallback(id => dispatch(insert(id)), [dispatch]);

  return <TodoInsert insert={onInsert} todos={todos} />;
};

export default React.memo(TodoInserContainer);
