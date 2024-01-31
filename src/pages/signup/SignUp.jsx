import React, { useState } from "react";
import {
  Container,
  Header,
  Image,
  Form,
  Button,
  Message,
  FormGroup,
} from "semantic-ui-react";
import "./SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countrey, setCountrey] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const strongPasswordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;

  const handleSubmit = async () => {
    const newErrors = {};
    if (!firstName) {
      newErrors.firstName = "First Name is required";
    }

    if (!lastName) {
      newErrors.lasttName = "Last Name is required";
    }

    if (!date) {
      newErrors.date = "Date  is required";
    }

    if (!email) {
      newErrors.email = "Email  is required";
    }

    if (!password) {
      newErrors.password = "Password in required";
    } else if (!strongPasswordRegex.test(password)) {
      newErrors.password =
        "Password must be at 8 characters long and conain at leat one uppercase letter,one lowercase letter,one digit ,and one special character";
    }
    if (Object.keys(newErrors).length === 0) {
      const userData = {
        firstName,
        lastName,
        date,
        sex,
        email,
        password,
        countrey,
        city,
        zip,
      };

      try {
        const response = await axios.post(
          "http://localhost:4000/auth/register",
          userData
        );
        console.log(response.data);
        navigate("/SignIn");
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
        height: "50vh",
      }}
    >
      <div className="signup_header">
        <Header as="h1">Sign Up</Header>
      </div>

      <div className="main_sign_up">
        <div className="sign-up-form">
          <Form onSubmit={handleSubmit}>
            <FormGroup widths="equal">
              <Form.Input
                label="First name"
                placeholder="FirstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                error={error.firstName}
              />
              <Form.Input
                label="Last name"
                placeholder="LastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                error={error.lastName}
              />
            </FormGroup>

            <FormGroup widths="equal">
              <Form.Input
                label="Date"
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                error={error.date}
              />

              <Form.Input
                label="Sex"
                placeholder="Sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              />
            </FormGroup>

            <FormGroup widths="equal">
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
            </FormGroup>

            <FormGroup widths="equal">
              <Form.Input
                label="Countrey"
                placeholder="Countrey"
                value={countrey}
                onChange={(e) => setCountrey(e.target.value)}
              />

              <Form.Input
                label="City"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <Form.Input
                label="Zip"
                placeholder="Zip"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </FormGroup>
            <Button type="submit">Sign Up</Button>
            <Message error header="Sing Up Failed" content={error} />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
