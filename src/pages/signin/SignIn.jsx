import React, { useState } from "react";
import {
  Container,
  Header,
  Image,
  Form,
  Button,
  Message,
} from "semantic-ui-react";
import "./SignIn.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/userSlice";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const strongPasswordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;

  const handleSubmit = async () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!password) {
      newErrors.password = "Password in required";
    } else if (!strongPasswordRegex.test(password)) {
      newErrors.password =
        "Password must be at 8 characters long and conain at leat one uppercase letter,one lowercase letter,one digit ,and one special character";
    }
    if (Object.keys(newErrors).length === 0) {
      const userData = {
        email,
        password,
      };

      try {
        const response = await axios.post(
          "http://localhost:4000/auth/login",
          userData
        );

        console.log(response.data);

        if (response) {
          dispatch(login(response.data.user));
          navigate("/");
        }
      } catch (error) {
        console.error("Error", error);
      }
    } else {
      setError(newErrors);
    }
  };

  return (
    <div
      style={{
        height: "49vh",
      }}
    >
      <div className="signin_header">
        <Header as="h1">Sign In</Header>
      </div>
      <div className="main_sign_in">
        <div className="sign-in-form">
          <Form onSubmit={handleSubmit}>
            <Form.Input
              type="email"
              label="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error.email}
            />
            <Form.Input
              label="Password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={error.password}
            />
            <Button type="submit">Sign In</Button>
            <Message error header="Sing In Failed" content={error} />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
