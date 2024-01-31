import React from "react";
import { useSelector } from "react-redux";
import { Button, Container, Table } from "semantic-ui-react";

function Cart() {
  const cartItems = useSelector((state) => state.cart.item);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Container>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Product</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {cartItems.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.quantity}</Table.Cell>
                  <Table.Cell>${item.price * item.quantity}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="2">Total Amount</Table.HeaderCell>
                <Table.HeaderCell>${totalAmount}</Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <Button primary>Pay</Button>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
