import * as api from "../lib/api";
import { handleActions, createAction } from "redux-actions";
/**
 * delay 기다리는 함수
 * put 특정액션 디스패치
 * takeEvery 들어오는 모든 액션에 대해 특정 작업을 처리
 * takeLatest 기존 진행 중이던 작업이 있다면 취소 후 가장마지막 작업만 수행
 * call Promise를 반환하는 함수를 호출 하고 기다릴수있다.
 */
import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const GET_BOXOFFICE = "movie/GET_BOXOFFICE";
const GET_BOXOFFICE_SUCCESS = "movie/GET_BOXOFFICE_SUCCESS";
const GET_BOXOFFICE_FAILURE = "movie/GET_BOXOFFICE_FAILURE";

const initialState = {
  movie: null,
  loading: {
    GET_BOXOFFICE: false
  }
};

export const getBoxOffice = createAction(GET_BOXOFFICE, date => date )

function* getBoxOfficeSaga(action) {
  yield put(getBoxOffice); 
  console.log(getBoxOffice)// call(첫번째 함수는 호출하고싶은 함수, ...호출함수에 넣어주고 싶은 인수들)
  try {
    const boxOffice = yield call(api.getBoxOffice, action.payload );
    console.log(action)
    
    yield put({
      type: GET_BOXOFFICE_SUCCESS,
      payload: boxOffice.data.boxOfficeResult.dailyBoxOfficeList
    });
  } catch(e){
    yield put({
        type: GET_BOXOFFICE_FAILURE,
        error:true,
        payload: e
      })
    }
  }
  
  export function* movieSaga() {
    yield takeLatest(GET_BOXOFFICE, getBoxOfficeSaga);
  }
  

const movie = handleActions(
  {
    [GET_BOXOFFICE]: state => ({
      ...state,
      loading: {
        GET_BOXOFFICE: true
      }
    }),
    [GET_BOXOFFICE_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        GET_BOXOFFICE: false
      },
      movie: action.payload
    }),
    [GET_BOXOFFICE_FAILURE]: (state, action) => ({
      ...state,
      movie: action.payload,
      loading: {
        GET_BOXOFFICE: false
      }
    })
  },
  initialState
);

export default movie;
