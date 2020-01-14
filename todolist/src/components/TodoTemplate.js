import React, { useState, useCallback, useRef } from "react";
import "./TodoTemplate.css";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";
import { Link } from "react-router-dom";

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
    }
  ]);

  let nextId = useRef(3);

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
    <div>
      <ul>
        <li><Link to="/">돌아가기</Link></li>
      </ul>
      <hr />
      <div className="todoTemplate">
        <div className="todoTemplate div">오늘 할 일</div>
        <div>
          <TodoInsert insert={insert} />
          <TodoList todos={todos} remove={remove} success={success} />
        </div>
      </div>
    </div>
  );
};

export default TodoTemplate;
