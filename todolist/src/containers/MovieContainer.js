import React from "react";
import { connect } from "react-redux";
import MovieList from "../components/MovieMiddleware/MovieList";
import { getBoxOffice, getQuery } from "../modules/movie";

const { useEffect } = React;

const MovieContainer = ({ getBoxOffice, boxoffice, loading }) => {
  useEffect(() => {
    getBoxOffice();
  }, [getBoxOffice]);

  return (
    <>
      <MovieList
        movie={boxoffice}
        loading={loading}
        getBoxOffice={getBoxOffice}
      />
    </>
  );
};

export default connect(
  ({ movie }) => ({
    boxoffice: movie.movie,
    loading: movie.loading.GET_BOXOFFICE
  }),
  {
    getBoxOffice
  }
)(MovieContainer);
