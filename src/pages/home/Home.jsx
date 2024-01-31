import React, { useEffect, useState } from "react";
import {
  Button,
  Icon,
  Container,
  Header,
  Grid,
  Image,
  List,
  Segment,
  Dropdown,
  GridRow,
  GridColumn,
} from "semantic-ui-react";

import Cards from "../../components/card/Cards";
import axios from "axios";
const HomepageHeading = () => (
  <Container text>
    <Header
      as="h1"
      content="COS"
      inverted
      style={{
        fontSize: "2em",
        marginTop: "3em",
      }}
    />
    <Header
      as="h2"
      content="Circle of skaters"
      inverted
      style={{
        fontSize: "1em",
        marginTop: "2em",
      }}
    />
 

  </Container>
);

const HomepageLayout = () => {
  return (
    <Segment vertical style={{ padding: "8em 0em" }}>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3"> Welcome to "COS" - Circle of Skaters</Header>
            <p>
              {" "}
              where passion meets pavement. Join the COS community, where
              individuality is celebrated, and the skating spirit thrives. Find
              us at our website. let's roll together!
            </p>
            <p>
              We're more than a skate shop; we're a community united by a love
              for skating. Dive into our carefully curated selection of top-tier
              skate gear, trendy apparel, and customizable boards.
            </p>
            <Header as="h3"> Join the COS community!</Header>

            <p>
              Where individuality is celebrated, and the skating spirit thrives.
              Find us at our website. let's roll together!
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image bordered rounded size="large" src="" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
function Home() {
  const [allCard, SetAllCard] = useState([]);
  useEffect(() => {
    const getAllCard = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/cards`);

        if (response.data) {
          SetAllCard(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllCard();
  }, []);
  return (
    <>
      <Segment
        vertical
        inverted
        textAlign="center"
        style={{ minHeight: 700, padding: "1em 0em" }}
      >
        <HomepageHeading />
      </Segment>
      <HomepageLayout />
      <Segment vertical>
        <Container>
          <Grid>
            <GridRow columns={4}>
              {allCard.slice(0, 5).map((data) => (
                <GridColumn key={data._id}>
                  <Cards data={data} />
                </GridColumn>
              ))}
            </GridRow>
          </Grid>
        </Container>
      </Segment>
    </>
  );
}

export default Home;
