import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { insert } from "../modules/todo";
import TodoInsert from "../components/ReduxTodo/TodoInsert";

const TodoInserContainer = () => {


  const dispatch = useDispatch();
  const onInsert = useCallback(id => dispatch(insert(id)), [dispatch]);

  return <TodoInsert insert={onInsert}  />;
};

export default React.memo(TodoInserContainer);
