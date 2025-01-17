import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Food() {
  let [foodData, setFoodData] = useState([]);
  const [cartData, setCartData] = useState(() => {
    const savedCart = localStorage.getItem("cartItem");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [activeFilter, setActiveFilter] = useState("All");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/items/allitem");
      const jsonResponse = await response.json();

      setFoodData(jsonResponse.data);
    };
    fetchData();
  }, []);
  const handleFilter = (filter) => {
    setActiveFilter(filter);
    const dd = foodData.filter((item) => item.category == filter);
    const ddd = foodData.filter((item) => item.category != filter);
    const dddd = [...dd, ...ddd];

    setFoodData(dddd);
    // Your filter logic here
  };
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartData));
  }, [cartData]);

  const handleCart = (itemId) => {
    setCartData((previousData) => {
      // Check if item already exists in cart
      if (!previousData.includes(itemId)) {
        return [...previousData, { ...itemId, quantity: 1 }];
      }
      return previousData;
    });
  };
  return (
    <>
      <section className="food_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>
          <ul className="filters_menu">
            <li
              className={activeFilter === "All" ? "active" : ""}
              data-filter="*"
              onClick={() => handleFilter("All")}
            >
              All
            </li>
            <li
              className={activeFilter === "Burger" ? "active" : ""}
              data-filter=".burger"
              onClick={() => handleFilter("Burger")}
            >
              Burger
            </li>
            <li
              className={activeFilter === "Pizza" ? "active" : ""}
              data-filter=".pizza"
              onClick={() => handleFilter("Pizza")}
            >
              Pizza
            </li>
            <li
              className={activeFilter === "Pasta" ? "active" : ""}
              data-filter=".pasta"
              onClick={() => handleFilter("Pasta")}
            >
              Pasta
            </li>
            <li
              className={activeFilter === "Fries" ? "active" : ""}
              data-filter=".fries"
              onClick={() => handleFilter("Fries")}
            >
              Fries
            </li>
          </ul>
          <div className="filters-content">
            <div className="row grid">
              {foodData.map((item, index) => (
                <div key={index} className="col-sm-6 col-lg-4 all pizza">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img
                          src={`http://localhost:8000/items/image/${item.imageUrl}`}
                          alt=""
                        />
                      </div>
                      <div className="detail-box">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <div className="options">
                          <h6>Rs.{item.price}</h6>
                          {!cartData.some(
                            (cartItem) => cartItem._id === item._id
                          ) && (
                            <Link onClick={() => handleCart(item)}>
                              <svg
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 456.029 456.029"
                                style={{
                                  enableBackground: "new 0 0 456.029 456.029",
                                }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  <g>
                                    <path
                                      d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                   c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                    />
                                  </g>
                                </g>
                                <g>
                                  <g>
                                    <path
                                      d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                   C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                   c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                   C457.728,97.71,450.56,86.958,439.296,84.91z"
                                    />
                                  </g>
                                </g>
                                <g>
                                  <g>
                                    <path
                                      d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                   c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                    />
                                  </g>
                                </g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                              </svg>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="btn-box">
            <a href="">View More</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Food;
