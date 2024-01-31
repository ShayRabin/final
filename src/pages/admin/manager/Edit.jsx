import React, { useState } from "react";
import { Button, Dropdown, Form } from "semantic-ui-react";
import axios from "axios";
const Edit = ({ data }) => {
  const [cardData, setCardData] = useState({
    header: "" || data.header,
    photo: "" || data.photo,
    productType: "" || data.productType,
    description: "" || data.description,
    salePrice: "" || data.salePrice,
    price: "" || data.price,
  });
  const dropdownOptions = [
    {
      key: "completeSkateboards",
      text: "Complete Skateboards",
      value: "completeSkateboards",
    },
    { key: "decks", text: "Decks", value: "decks" },
    { key: "trucks", text: "Trucks", value: "trucks" },
    { key: "wheels", text: "Wheels", value: "wheels" },
    { key: "shoes", text: "Shoes", value: "shoes" },
    { key: "hats", text: "Hats", value: "hats" },
  ];

  const handleChange = (e, { name, value }) => {
    setCardData({ ...cardData, [name]: value });
  };
  const handleDropdownChange = (e, { value }) => {
    setCardData({ ...cardData, productType: value });
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/cards/${data._id}`,
        cardData
      );
      if (response.data) {
        alert("Card Edit");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="add-card-page">
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Product header</label>
          <input
            type="text"
            name="header"
            value={cardData?.header}
            onChange={(e) => handleChange(e, e.target)}
            required
          />
        </Form.Field>

        <Form.Field>
          <label>Product Photo</label>
          <input
            type="text"
            name="photo"
            placeholder="URL"
            value={cardData.photo}
            onChange={(e) => handleChange(e, e.target)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Product Type</label>
          <Dropdown
            placeholder="Select Product Type"
            name="productType"
            options={dropdownOptions}
            value={cardData.productType}
            onChange={(e, { value }) =>
              handleChange(e, { name: "productType", value })
            }
            search
            selection
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Product description</label>
          <input
            type="text"
            name="description"
            value={cardData.description}
            onChange={(e) => handleChange(e, e.target)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Product saleprice</label>
          <input
            type="text"
            name="salePrice"
            value={cardData.salePrice}
            onChange={(e) => handleChange(e, e.target)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Product price</label>
          <input
            type="text"
            name="price"
            value={cardData.price}
            onChange={(e) => handleChange(e, e.target)}
            required
          />
        </Form.Field>
        <Button primary type="submit">
          Edit Card
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
