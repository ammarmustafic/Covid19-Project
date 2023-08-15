import { styled } from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: lightslategrey;
display: flex;
justify-content: center;
align-items: center;
`
export const Form = styled.div`
width: 400px;
height: 500px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const Input = styled.input`
width: 90%;
height: 40px;
margin: 20px;
border-radius: 10px;
border: none;
border-bottom: 3px solid grey;
`
export const Btn = styled.button`
width: 100px;
height: 50px;
border-radius: 10px;
border: none;
&:hover{
    background-color: grey;
    color: white;
    transition: 1s;
}
`