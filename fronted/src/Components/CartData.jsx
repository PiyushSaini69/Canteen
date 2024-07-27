import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import Header from "./Main/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CartData = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
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
  //
  const [ip, setIp] = useState("");

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setIp(response.data.ip);
      } catch (error) {
        console.error("Error fetching the IP address:", error);
      }
    };

    fetchIp();
  }, []);
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);
  //
  const handleOrder = async () => {
    if (!userData || cartData.length <= 0) {
      navigate("/signin");
    } else {
      const response = await fetch("http://localhost:8000/order/order_create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartData, userData, ip, location }),
      });
      const jsonResponse = await response.json();
      if (!response.ok) {
        window.alert("cart is empty");
      } else {
        localStorage.setItem("cartItem",JSON.stringify([]))
        window.alert("Order created successfully");
      }
    }
  };

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
      <center style={{ margin: "100px" }}>
        <button
          type="button"
          className="btn btn-success btn-lg"
          onClick={handleOrder}
        >
          Order Now
        </button>
      </center>
    </>
  );
};

export default CartData;
