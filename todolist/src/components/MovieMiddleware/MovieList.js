import React, { useState, useEffect, useCallback, useRef } from "react";
import MovieItem from "./MovieItem";
import styled from "styled-components";

const ListBlock = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 768px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  & > div {
    margin: 0 auto;
    width: 450px;
  }
  .fdiv {
    border-radius: 6px;
    background: rgb(101, 173, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    font-weight: 600;
    font-size: 2rem;
    color: white;
  }
  .date {
    display: flex;
    width: 450px;
    background: white;
  }
  .input {
    flex: 1;
    text-align: center;
  }
`;

const MovieList = ({ loading, movie, getBoxOffice }) => {
  const [value, setvalue] = useState("");
  const [date, setDate] = useState("");

  const focus = useRef(null);

  const onChange = useCallback(
    e => {
      setvalue(e.target.value);
    },
    [setDate]
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const num = parseInt(value);
      if (!value || !num || value.length !== 8) return;

      setDate(value);
      setvalue("");
      getBoxOffice(date);
      focus.current.focus();
    },
    [value]
  );
  /*
  const [loading, response, error] = usePromise(()=> {
    const query = date || "20190101";
    return axios.get(
              `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=ce945804e17acb78c4841e57d900ba33&targetDt=${query}`
            );
  },[date]);

  if (loading) {
    return <ListBlock>로딩중입니다</ListBlock>;
  }

  if (!response) {
    return null;
  }
  const  movies  = response.data.boxOfficeResult.dailyBoxOfficeList;
  */
  console.log(loading);
  console.log(movie);
  return (
    <ListBlock>
      <div>
        <div className="fdiv">영화순위</div>
        <form className="date" onSubmit={onSubmit}>
          <input
            className="input"
            value={value}
            onChange={onChange}
            ref={focus}
            placeholder=" 궁금한 날 예) 20190105 처럼 입력"
          />
          <button>검색</button>
        </form>
        {loading && "로딩중"}
        {!loading &&
          movie &&
          movie.map(rank => <MovieItem key={rank.rank} movie={rank} />)}
      </div>
    </ListBlock>
  );
};

export default MovieList;
