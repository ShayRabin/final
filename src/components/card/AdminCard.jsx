import React, { useState } from "react";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
  Button,
  Modal,
} from "semantic-ui-react";
import axios from "axios";
import Edit from "../../pages/admin/manager/Edit";
const AdminCard = ({ data }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const hendleDelete = async (cardId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/cards/${cardId}`
      );
      if (response.data) {
        alert("Card Delete");
      }
    } catch (error) {
      console.error("Error deleting card:", error);
      alert("Error deleting card. Please check the console for details.");
    }
  };
  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };
  return (
    <Card>
      <Image src={data.photo} wrapped ui={false} />
      <CardContent textAlign="center">
        <CardHeader>{data.header}</CardHeader>

        <div
          style={{
            display: "flex",

            flexDirection: "column",
            aligniItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "1.5em",
              padding: "20px 20px",
            }}
          >
            ${data.salePrice}
          </span>
          <span className="price">${data.price}</span>
        </div>
      </CardContent>
      <CardContent textAlign="center">
        <p>{data.description}</p>
      </CardContent>
      <CardContent extra textAlign="right">
        <Icon
          name="delete"
          size="big"
          className="icon_cart"
          onClick={() => hendleDelete(data._id)}
        />
        <Icon name="edit" size="big" className="icon_cart" />
      </CardContent>

      <Modal open={isEditModalOpen} onClose={handleCloseEditModal} closeIcon>
        <Modal.Header>Edit Card</Modal.Header>
        <Modal.Content>
          <Edit data={data} />
          {/* Add a form or input fields for editing here */}
        </Modal.Content>
      </Modal>
    </Card>
  );
};

export default AdminCard;
