import React from 'react';
import './TodoListItem.css';

const TodoListItem = () => {
    return (
        <div className="TodoListItem">
            <div className="complate"> 완료 </div>
            <div className="todo">TodoList</div>
            <div className="delete"> 삭제 </div>
        </div>
    );
};

export default TodoListItem;