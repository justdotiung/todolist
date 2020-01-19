import { createAction, handleActions } from "redux-actions";

const INSERT = "todo/INSERT";
const CHECK = "todo/CHECK";
const REMOVE = "todo/REMOVE";

const initialState = {
  todos: [
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
    },
    {
      id: 4,
      contents: "redux 공부",
      check: false
    },
    {
      id:5,
      contents: "middleware 공부",
      check: false
    }
  ]
};

let id = 6;
export const insert = createAction(INSERT, contents => ({
  id: id++,
  contents,
  check: false
}));
export const check = createAction(CHECK, id => id);
export const remove = createAction(REMOVE, id => id);

const todo = handleActions(
  {
    [INSERT]: (state, {payload:todo}) => ({
      ...state,
      todos: state.todos.concat(todo)
    }),
    [CHECK]: (state, {payload:id}) => ({
      ...state,
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, check: !todo.check } : todo
      )
    }),
    [REMOVE]: (state, {payload:id}) => ({
      ...state,
      todos: state.todos.filter(todo => todo.id !== id)
    })
  },
  initialState
);

export default todo;
