import React, { useState, useCallback, useRef } from 'react';
import './App.css'
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {

  const [todos, setTodos] = useState([
    {
      id:1,
      contents: '리액트 연습',
      check: false
    },
    {
      id:2,
      contents: 'todolist',
      check: false
    },
  ]);

  let nextId = useRef(3);
  
  const insert = useCallback(contents=>{
    const todo = {
      id:nextId.current,
      contents,
      check: false
    };
    setTodos(todos=>todos.concat(todo));
    nextId.current += 1;
  },[])

  const remove = useCallback(id => {
    setTodos(todos.filter(todo=>todo.id !== id))
  },[todos]);

  const success = useCallback(id => {
    setTodos(todos.map(todo => todo.id !== id ? todo : {...todo, check: !todo.check})
  )},[todos]);

  return (
    <div>
      <TodoTemplate  >
        <TodoInsert insert={insert} />
        <TodoList todos={todos} remove={remove} success={success}/>
      </TodoTemplate>
    </div>
  );
};

export default App;