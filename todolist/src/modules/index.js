import { combineReducers } from 'redux';
import todo from './todo';
import movie from './movie';

const rootReducer = combineReducers({
    todo,
    movie
});

export default rootReducer;