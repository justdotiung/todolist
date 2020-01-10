import React from 'react';
import './TodoInsert.css'

const TodoInsert = () => {
    return (
        <form className="TodoInsert">
            <input
               placeholder="내용을 입력하세요"
            />
            <button>추가</button>
        </form>
    );
};

export default TodoInsert;