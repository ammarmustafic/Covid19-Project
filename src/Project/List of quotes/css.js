import { styled } from "styled-components";

export const Containerr = styled.div`
width: 100%;
height: 150vh;
background-color: lightslategrey;
display: flex;
justify-content: baseline;
align-items: center;
flex-direction: column;
`

export const Butn = styled.button`
width: 100px;
height: 50px;
background-color: inherit;
color: white;
border: 2px solid red;
&:hover{
    background-color: red;
    color: white;
    transition: 1s;
}
`
export const QField = styled.div`
width: 40%;
height: 20%;
border:  1px solid black;
background-color:  white;
border-radius: 10px;
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
export const Butn1 = styled.button`
width: 100px;
height: 50px;
background-color: inherit;
color: white;
border: 2px solid blue;
&:hover{
    background-color: blue;
    color: white;
    transition: 1s;
}
`
export const Butn2 = styled.button`
width: 50px;
height: 50px;
background-color: inherit;
color: white;
margin-right: 10px;
margin-top: 10px;
border: 2px solid white;
&:hover{
    background-color: white;
    color: black;
}
`
export const BtnHolder = styled.div`
width: 300px;
height: 50px;
justify-content: center;
display: flex;
`