import { combineReducers } from 'redux';
import todo from './todo';
import movie, { movieSaga } from './movie';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    todo,
    movie
});

export function* rootSaga(){
    yield all([movieSaga()]);
}

export default rootReducer;