import React from 'react';
import './TodoTemplate.css'

const TodoTemplate = ({children}) => {
    return (
        <div className="todoTemplate">
            <div className="todoTemplate div">오늘 할 일</div>
            <div>{children}</div>
        </div>
    );
};

export default TodoTemplate;