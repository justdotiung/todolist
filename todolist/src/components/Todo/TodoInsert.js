import React, { useState, useCallback, useRef } from 'react';
import './TodoInsert.css'

const TodoInsert = ({insert}) => {

    const [value, setValue] = useState('');
    const input = useRef(null);

    const onChange = useCallback(e => {
        setValue(e.target.value)
    });
    
    const onClick = useCallback(e=>{
        e.preventDefault();
        if(!value) return;
        insert(value);
        setValue('');
        input.current.focus();
    },[insert, value]);

    return (
        <form className="TodoInsert"
            onSubmit={onClick}>
            <input
               placeholder="내용을 입력하세요"
               value={value}
               onChange={onChange}
               ref={input}
            />
            <button>추가</button>
        </form>
    );
};

export default TodoInsert;