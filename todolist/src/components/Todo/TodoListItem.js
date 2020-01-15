import React, { useCallback } from "react";
import "./TodoListItem.css";
import styled from "styled-components";

const ItemBlock = styled.div`
  border-bottom: 2px solid white;
`;

const DeleteBlock = styled.div`
  background: gray;
  width: 2.2rem;
  height:20px;
  font-size:14px;
  border-radius:4px;
  text-align:center;
  &:hover{
    background:rgb(101, 173, 255);;
  }
`;

const TodoListItem = ({ todo, remove, success }) => {
  const { id, contents, check } = todo;
  return (
    <ItemBlock>
      <div className="TodoListItem">
        <div className="complate" onClick={() => success(id)}>
          완료
        </div>
        <div className={check ? "todo success" : "todo"}>{contents}</div>
        <div className="delete" onClick={() => remove(id)}>
          <DeleteBlock>
           삭제
          </DeleteBlock>
        </div>
      </div>
    </ItemBlock>
  );
};

export default React.memo(TodoListItem);
