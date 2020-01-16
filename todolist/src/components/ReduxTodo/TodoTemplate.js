import React from "react";
import "./TodoTemplate.css";
import styled from "styled-components";
import TodoListContainer from "../../containers/TodoListContainer";
import TodoInserContainer from "../../containers/TodoInserContainer";


const TodoTemplateBlock = styled.div`
  display:flex;
  width:768px;
  margin: 0 auto;
  margin-top: 100px;
  @media screen and (max-width:768px){
    width:100%;
  }
`


const TodoListBlock = styled.div`
  background: rgb(241, 241, 241);
  min-height: 10rem;
  max-height: 16rem;
  overflow-y: auto;
`;

const TodoTemplate = () => {


 

  return (
    <TodoTemplateBlock>
      <div className="todoTemplate">
        <div className="todoTemplate div">오늘 할 일</div>
        <div>
          {/* <TodoInsert insert={insert} /> */}
          <TodoListBlock>
            <TodoInserContainer />
            <TodoListContainer/>
          </TodoListBlock>
        </div>
      </div>
    </TodoTemplateBlock>
  );
};

export default TodoTemplate;
