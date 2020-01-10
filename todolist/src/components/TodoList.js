import React from 'react';
import './TodoList.css'
import TodoListItem from './TodoListItem';

const TodoList = () => {
    return (
        <div className="TodoList">
           <TodoListItem />
        </div>
    );
};

export default TodoList;