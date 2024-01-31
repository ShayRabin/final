import React from "react";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
  Button,
} from "semantic-ui-react";
import { UseDispatch, useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
const Cards = ({ data }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addItem({
        name: data?.header,
        price: data?.price,
      })
    );
  };
  return (
    <Card>
      <Image src={data?.photo} wrapped ui={false} />
      <CardContent textAlign="center">
        <CardHeader>{data?.header}</CardHeader>

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
            ${data?.salePrice}
          </span>
          <span className="price">${data?.price}</span>
        </div>
      </CardContent>
      <CardContent textAlign="center">
        <p>{data?.description}</p>
      </CardContent>
      <CardContent extra textAlign="right">
        <Icon
          name="plus cart"
          size="big"
          className="icon_cart"
          onClick={() => {
            addToCart();
          }}
        />
      </CardContent>
    </Card>
  );
};

export default Cards;
