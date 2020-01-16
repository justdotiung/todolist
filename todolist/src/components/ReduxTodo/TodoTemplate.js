import React, { useState, useCallback, useRef } from "react";
import "./TodoTemplate.css";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";
import styled from "styled-components";

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
  const [todos, setTodos] = useState([
    {
      id: 1,
      contents: "리액트 연습",
      check: false
    },
    {
      id: 2,
      contents: "todolist",
      check: false
    },
    {
      id: 3,
      contents: "spa 라우터 공부",
      check: false
    }
  ]);

  let nextId = useRef(4);

  const insert = useCallback(contents => {
    const todo = {
      id: nextId.current,
      contents,
      check: false
    };
    setTodos(todos => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const remove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  const success = useCallback(id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id !== id ? todo : { ...todo, check: !todo.check }
      )
    );
  }, []);

  return (
    <TodoTemplateBlock>
      <div className="todoTemplate">
        <div className="todoTemplate div">오늘 할 일</div>
        <div>
          <TodoInsert insert={insert} />
          <TodoListBlock>
            <TodoList todos={todos} remove={remove} success={success} />
          </TodoListBlock>
        </div>
      </div>
    </TodoTemplateBlock>
  );
};

export default TodoTemplate;
