import React, { useEffect, useState } from "react";

import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Image,
  Modal,
  Grid,
  GridRow,
  GridColumn,
  Container,
} from "semantic-ui-react";
import Add from "./Add";

import Cards from "../../../components/card/Cards";
import axios from "axios";
import AdminCard from "../../../components/card/AdminCard";
const Manager = () => {
  const [modalAddOpen, setModalAddOpen] = useState(false);
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
  console.log(allCard);
  return (
    <Container>
      <div
        style={{
          height: "100vh",
        }}
      >
        <Modal
          onClose={() => setModalAddOpen(false)}
          onOpen={() => setModalAddOpen(true)}
          open={modalAddOpen}
          trigger={<Button primary>Add prodact</Button>}
        >
          <ModalHeader>Add </ModalHeader>
          <ModalContent>
            <Add />
          </ModalContent>
        </Modal>

        <Grid>
          <GridRow columns={4}>
            {allCard.map((data, index) => {
              return (
                <GridColumn>
                  <AdminCard data={data} />;
                </GridColumn>
              );
            })}
          </GridRow>
        </Grid>
        <div></div>
      </div>
    </Container>
  );
};

export default Manager;
