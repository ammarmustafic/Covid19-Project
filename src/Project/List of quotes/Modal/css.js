// src/modalcss.js

import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  width: 400px;
  height: 300px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
width: 100px;
height: 50px;
background-color: inherit;
color: black;
border: 2px solid red;
&:hover{
    background-color: red;
    color: white;
    transition: 1s;
}
  cursor: pointer;
`;
export const AddButton = styled.button`
width: 100px;
height: 50px;
background-color: inherit;
color: black;
border: 2px solid blue;
cursor: pointer;
&:hover{
    background-color: blue;
    color: white;
    transition: 1s;
}
`
export const Unos = styled.input`
width: 98%;
height: 200px;
`
