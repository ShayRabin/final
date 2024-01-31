import React from "react";
import {
  Segment,
  Container,
  Header,
  List,
  Grid,
  Image,
} from "semantic-ui-react";
import logo from "../../assets/logo.png";
function Footer() {
  return (
    <Segment inverted vertical style={{ padding: "3rem 2rem" }}>
      <Container textAlign="center"></Container>
      <Image src={logo} centered size="small" />
      <div className="owner">
        {" "}
        © 2024 Trademarks and brands are the property of their respective
        owners.
      </div>
    </Segment>
  );
}

export default Footer;
