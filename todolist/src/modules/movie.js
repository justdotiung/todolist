import * as api from "../lib/api";
import { handleActions } from "redux-actions";

const GET_BOXOFFICE = "movie/GET_BOXOFFICE";
const GET_BOXOFFICE_SUCCESS = "movie/GET_BOXOFFICE_SUCCESS";
const GET_BOXOFFICE_FAILURE = "movie/GET_BOXOFFICE_FAILURE";

const initialState = {
  movie: null,
  loading: {
    GET_BOXOFFICE: false
  }
};

export const getBoxOffice = date => async dispatch => {
  dispatch({ type: GET_BOXOFFICE });
  try {
    const res = await api.getBoxOffice(date);
    dispatch({
      type: GET_BOXOFFICE_SUCCESS,
      payload: res.data.boxOfficeResult.dailyBoxOfficeList
    });
  } catch (e) {
    dispatch({
      type: GET_BOXOFFICE_FAILURE,
      error: true,
      payload: e
    });
    throw e;
  }
};

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
