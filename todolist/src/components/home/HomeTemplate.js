import React from "react";
import { Link } from "react-router-dom";
import "./HomeTemplate.css";

const HomeTemplate = () => {
  return (
    <div className="homeTemplate">
      <h1>홈화면</h1>
      <div>
        <Link to="/todo">게스트로 가기</Link>
      </div>
    </div>
  );
};

export default HomeTemplate;
