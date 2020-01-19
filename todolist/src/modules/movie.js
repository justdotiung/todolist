import * as api from "../lib/api";
import { handleActions } from "redux-actions";

const GET_BOXOFFICE = "movie/GET_BOXOFFICE";
const GET_BOXOFFICE_SUCCESS = "movie/GET_BOXOFFICE_SUCCESS";
const GET_BOXOFFICE_FAILURE = "movie/GET_BOXOFFICE_FAILURE";

const initialState = {
  movie: null,
  date: '',
  loading: {
    GET_BOXOFFICE: false
  }
};


export const getBoxOffice = (date) => async dispatch => {
  dispatch({ type: GET_BOXOFFICE });
  try {
    const query = date || "20190101";
    const res = await api.getBoxOffice(query);
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
        [GET_BOXOFFICE]: (state) => ({
            ...state,
            loading:{
                ...state.loading,
                GET_BOXOFFICE: true
            }
        }),
        [GET_BOXOFFICE_SUCCESS] : (state, action) => ({
                ...state,
                loading: {
                    ...state.loading,
                    GET_BOXOFFICE: false
                },
                movie: action.payload
        }),
        [GET_BOXOFFICE_FAILURE]: (state) =>({
            ...state,
            loading:{
                ...state.loading,
                GET_BOXOFFICE: false
            }
        })
    },
    initialState
);
export default movie;
