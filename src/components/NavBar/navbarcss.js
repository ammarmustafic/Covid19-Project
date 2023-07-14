import styled from "styled-components";

export const NavBar = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Covidimg = styled.img`
  width: 200px;
  height: 100px;
`;

export const Li = styled.li`
  margin: 20px;
  font-size: 20px;
  position: relative;

  &:hover {
    transform: scale(1.1);
    color: red;
    transition: color 0.5s, opacity 0.5s, transform 0.5s;
  }
`;
