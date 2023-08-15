import React, { useState } from "react";
import { Btn, Container, Form, Input } from "./css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const USERS = [
        {
          id: "d964099a-1a2a-46f5-9782-e2601b5aac9e",
          username: "fazi",
          password: "1234",
        },
        {
          id: "a77d280e-94b8-4a1e-a869-1f14e622fa4e",
          username: "pera",
          password: "1234",
        },
        {
          id: "49d73d43-e1bc-46b4-88a6-d802d1cc9fe9",
          username: "mika",
          password: "1234",
        },
        {
          id: "3de3d9ff-60b1-4694-9e87-77aefea9ea0e",
          username: "zika",
          password: "1234",
        },
      ];
     

      const handleUsername = (e) => {
        SetUsername(e.target.value);
      };
    
      const handlePass = (e) => {
        SetPassword(e.target.value);
      };
    
      const handleLogin = () => {
        const user = USERS.find((user) => user.username === username);
        if (user && user.password === password) {
          setIsLoggedIn(true);
        } else {
          window.alert("Incorrect username or password");
        }
      };
    
      return (
        <Container>
          <Form>
            <h1>QUOTES</h1>
            <Input
              placeholder="Enter your username.."
              value={username}
              onChange={handleUsername}
            />
            <Input
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={handlePass}
            />
            {isLoggedIn ? (
              <NavLink to="/quotes" className="active">
               <Btn>CONTINUE</Btn>
              </NavLink>
            ) : (
              <Btn onClick={handleLogin}>LOG IN</Btn>
            )}
          </Form>
        </Container>
      );
    };
    
    export default Login;