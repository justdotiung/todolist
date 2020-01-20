import React from "react";
import { connect } from "react-redux";
import MovieList from "../components/MovieMiddleware/MovieList";
import { getBoxOffice } from "../modules/movie";

const { useEffect } = React;

const MovieContainer = ({ getBoxOffice, boxoffice, loading }) => {
  useEffect(() => {
    if(boxoffice) return;
    getBoxOffice("20190101");
  }, [getBoxOffice, boxoffice]);

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
