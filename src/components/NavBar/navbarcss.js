import styled from "styled-components";

export const NavBar = styled.div`
  width: 99.9%;
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
    font-size: 25px;
    color: red;
    transition: color 0.5s, font-size 0.5s;

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      background-color: black;
      transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out;
      height: 1.3px;
      opacity: 1;
    }
  }
`;
