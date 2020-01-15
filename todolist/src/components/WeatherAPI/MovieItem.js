import React from "react";
import styled from "styled-components";

const ItemBlock = styled.div`
  background: rgb(241, 241, 241);

  height: 2rem;
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom:2px solid #4d9ee6;;
  .rank {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    flex: 1;
  }
  .new {
    padding-left: 5px;
    font-weight:600;
    font-size: 10px;
    color: #ff0000c7;
  }
  & + & {
    margin-top: 3px;
  }
`;
const MovieItem = ({ movie }) => {
  const { rank, rankOldAndNew, movieNm } = movie;
  // console.log(movie)
  return (
    <ItemBlock>
      <div className="rank">
        {rank}
        <span>위</span>
        <p className="new">{rankOldAndNew === "OLD" ? "" : rankOldAndNew}</p>
      </div>
      <div className="title">{movieNm}</div>
    </ItemBlock>
  );
};

export default MovieItem;
