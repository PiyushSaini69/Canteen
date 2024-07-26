// src/AddItem.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddItem = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      imageUrl: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //
    try {
      const data = new FormData();

      // Append form data
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("available", formData.available);
      data.append("imageUrl", formData.imageUrl);
      const response = await fetch("http://localhost:8000/items/createitem", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
    //
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h3>Add Item</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="imageUrl">Image</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="imageUrl"
                    name="imageUrl"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="available"
                    name="available"
                    checked={formData.available}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="available">
                    Available
                  </label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Add Item
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
