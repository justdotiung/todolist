import React from 'react';
import { connect } from "react-redux";
import { insert } from "../modules/todo";
import TodoInsert from "../components/ReduxTodo/TodoInsert";

const TodoInserContainer = ({insert}) => {
    return (
    <TodoInsert insert={insert} />
    );
};

export default connect((todos)=> ({
    todos: todos.todos,
}),{
    insert
})(TodoInserContainer);