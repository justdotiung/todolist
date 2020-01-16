const INSERT = "todo/INSERT";
const CHECK = "todo/CHECK";
const REMOVE = "todo/REMOVE";

const initialState = {
  todos : [
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
    }
  ]
};
let id = 5;

const insert = contents => ({
  type: INSERT,
  todo: {
    id: id++,
    contents: contents,
    ckeck: false
  }
});

const success = id => ({
  type: CHECK,
  id
});

const remove = id => ({
  type: REMOVE,
  id
});

export { insert, success, remove };

function todos(state = initialState, action) {
  switch (action.type) {
    case INSERT:
      return {
        todos: state.todos.concat(action.todo)
      };
    case CHECK:
      return {
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, check: !todo.check } : todo
        )
      };
    case REMOVE:
      return {
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
}

export default todos;
