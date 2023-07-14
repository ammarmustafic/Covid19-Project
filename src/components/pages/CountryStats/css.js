import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Insert = styled.div`
  input {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 15px;
    border: 1px solid firebrick;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const MiniCard = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  -webkit-box-shadow: -2px 6px 30px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 6px 30px -9px rgba(0, 0, 0, 0.75);
  box-shadow: -2px 6px 30px -9px rgba(0, 0, 0, 0.75);
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  animation: ${fadeIn} 0.5s ease-in;
`;
