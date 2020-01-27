import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import MovieList from "../components/MovieMiddleware/MovieList";
import { getBoxOffice } from "../modules/movie";

const { useEffect } = React;

const MovieContainer = ({ getBoxOffice, boxoffice, loading }) => {

  const [date, setDate] = useState('');

  useEffect(() => {
    if(boxoffice) return;
    
    getBoxOffice(date || '20190101');
  }, [getBoxOffice, boxoffice]);

  const onChange = e => { setDate(e.target.value) };

  const focus = useRef(null);

  const onSubmit = 
    e => {
      e.preventDefault();
      const num = parseInt(date);
      if (!date || !num || date.length !== 8) return;
      getBoxOffice(date);
      setDate('');
      focus.current.focus();
    };

  return (
    <>
      <MovieList
        movie={boxoffice}
        loading={loading}
        getBoxOffice={getBoxOffice}
        onChange={onChange}
        focus={focus}
        date={date}
        onSubmit={onSubmit}
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
