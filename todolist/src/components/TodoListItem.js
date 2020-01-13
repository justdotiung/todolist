import React, { useCallback } from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, remove, success }) => {
  const { id, contents, check } = todo;
  return (
    <div className="TodoListItem">
      <div className= "complate" onClick={() => success(id)}>
        완료
      </div>
      <div className={check ? "todo success" : "todo" } >{contents}</div>
      <div className="delete" onClick={() => remove(id)}>
        삭제
      </div>
    </div>
  );
};

export default TodoListItem;
