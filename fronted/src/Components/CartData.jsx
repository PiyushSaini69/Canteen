import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import Header from "./Main/Header";

const CartData = () => {
  const [cartData, setCartData] = useState(() => {
    const savedCart = localStorage.getItem("cartItem");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleQuantityChange = (itemId, increment) => {
    setCartData((prevData) =>
      prevData.map((item) =>
        item._id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  const handleDelete = (itemId) => {
    setCartData((prevData) => prevData.filter((item) => item._id !== itemId));
  };

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartData));
  }, [cartData]);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <h2>Cart Items</h2>
            {cartData.length > 0 ? (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item) => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>Rs.{item.price}</td>
                      <td>
                        <Button
                          variant="secondary"
                          onClick={() => handleQuantityChange(item._id, -1)}
                        >
                          -
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button
                          variant="secondary"
                          onClick={() => handleQuantityChange(item._id, 1)}
                        >
                          +
                        </Button>
                      </td>
                      <td>Rs.{item.price * item.quantity}</td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartData;
