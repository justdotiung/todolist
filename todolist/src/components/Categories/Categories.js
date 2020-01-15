import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderBlock = styled.div`
  display: flex;
  width: 768px;
  margin: 0 auto;
  font-weight: 800;
  border-bottom: 1px solid black;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Category = styled(NavLink)`
  text-decoration: none;
  white-space: pre;
  color: inherit;

  &:hover {
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

const Categories = () => {
  return (
    <div>
      <HeaderBlock>
        {categories.map(category => (
          <Category key={category.name} to={`/${category.path}`}>
            {category.name}
          </Category>
        ))}
      </HeaderBlock>
    </div>
  );
};

export default Categories;
