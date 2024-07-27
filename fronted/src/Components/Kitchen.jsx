// src/components/OrderTable.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Kitchen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await fetch('http://localhost:8000/order/all_order');
        setOrders(data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };
    getOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Failed to update order status:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Kitchen Panel</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Order ID</th>
            <th>Items</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.itemId}>
                      {item.name} (x{item.quantity})
                    </li>
                  ))}
                </ul>
              </td>
              <td>{order.totalPrice}</td>
              <td>{order.status}</td>
              <td>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => handleStatusChange(order._id, "processing")}
                  disabled={order.status !== "pending"}
                >
                  Start
                </button>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleStatusChange(order._id, "shipped")}
                  disabled={order.status !== "processing"}
                >
                  Ship
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleStatusChange(order._id, "delivered")}
                  disabled={order.status !== "shipped"}
                >
                  Deliver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Kitchen;
