import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../../components/card/Cards";
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
  Dropdown,
  GridRow,
  GridColumn,
  Container,
} from "semantic-ui-react";
function Products() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const filterOptions = [
    { key: "all", text: "All Products", value: "all" },
    {
      key: "completeSkateboards",
      text: "Complete Skateboards",
      value: "Complete skateboards",
    },
    { key: "decks", text: "Decks", value: "decks" },
    { key: "trucks", text: "Trucks", value: "trucks" },
    { key: "wheels", text: "Wheels", value: "wheels" },
    { key: "shoes", text: "Shoes", value: "shoes" },
    { key: "hats", text: "Hats", value: "hats" },
  ];
  const [allCard, SetAllCard] = useState([]);
  const handleFilterChange = (e, { value }) => {
    setSelectedFilter(value);
  };
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
    <div
      style={{
        height: "100vh",
      }}
    >
      <Dropdown
        placeholder="Select Product Type"
        selection
        options={filterOptions}
        value={selectedFilter}
        onChange={handleFilterChange}
      />
      <Grid>
        <GridRow columns={4}>
          {allCard
            .filter(
              (data) =>
                selectedFilter === "all" || data.productType === selectedFilter
            )
            .map((data) => (
              <GridColumn key={data._id}>
                <Cards data={data} />
              </GridColumn>
            ))}
        </GridRow>
      </Grid>
    </div>
  );
}

export default Products;
