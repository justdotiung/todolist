import React from "react";
import "./App.css";
import TodoTemplate from "./components/Todo/TodoTemplate";
import HomeTemplate from "./components/home/HomeTemplate";
import { Route ,NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;
  width:768px;
  margin: 0 auto;
  font-weight:800;
  border-bottom: 1px solid black;
  @media screen and (max-width: 768px){
    width :100%;
  }
`;

const Category = styled(NavLink)`
  text-decoration: none;
  white-space: pre;
  color: inherit;

  &:hover{
    color: rgb(101, 173, 255);
  }

  & + & {
    margin-left: 1rem;
  }
`;

const categories = [
  {
    name: "home",
    path: ""
  },
  {
    name: "todo",
    path: "todo"
  }
];

const App = () => {
  return (
    <div>
      <HeaderBlock>
        {categories.map(category => (
          <Category 
          key={category.name} 
          to={`/${category.path}`}>
            {category.name}
          </Category>
        ))}
      </HeaderBlock>
      <Route path="/" component={HomeTemplate}  exact/>
      <Route path="/todo" component={TodoTemplate} />
    </div>
  );
};

export default App;
