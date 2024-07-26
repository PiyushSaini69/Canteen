import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function Header() {
  const location = useLocation();
  console.log(location);
  let [activeFilterData, setActiveFilterData] = useState(location.pathname);

  let [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  let [isLogin, setIsLogin] = useState(userData ? true : false);
  const handleLogout = () => {
    localStorage.removeItem("userData");
  };
  const handleFilter = (filter) => {
    setActiveFilterData(filter);
  };
  return (
    <>
      <div className="hero_area">
        <div className="bg-box">
          <img src="images/hero-bg.jpg" alt="" />
        </div>
        {/* header section strats */}
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <Link className="navbar-brand" to="/home">
                <span>Crave Corner</span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav  mx-auto ">
                  <li
                    className={`nav-item ${
                      activeFilterData === "/home" ? "active" : ""
                    }`}
                    onClick={() => handleFilter("Home")}
                  >
                    <Link className="nav-link" to="/home">
                      Home
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      activeFilterData === "/menu" ? "active" : ""
                    }`}
                  >
                    <Link
                      className="nav-link"
                      to="/menu"
                      onClick={() => handleFilter("Menu")}
                    >
                      Menu
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      activeFilterData === "/about" ? "active" : ""
                    }`}
                    onClick={() => handleFilter("About")}
                  >
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      activeFilterData === "/book" ? "active" : ""
                    }`}
                    onClick={() => handleFilter("Book")}
                  >
                    <Link className="nav-link" to="/book">
                      Book Table
                    </Link>
                  </li>
                </ul>
                <div className="user_option">
                  {/* <a href="" className="user_link">
                    <i className="fa fa-user" aria-hidden="true" />
                  </a> */}
                  <a className="cart_link" href="#">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 456.029 456.029"
                      style={{ enableBackground: "new 0 0 456.029 456.029" }}
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
                  </a>
                  {/* <form className="form-inline">
                    <button
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    >
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </form> */}
                  <a
                    href=""
                    className="order_online"
                    style={{ textDecoration: "none" }}
                  >
                    Order Online
                  </a>
                  <div>
                    {isLogin ? (
                      <Link
                        to="/index.html"
                        className="order_online"
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    ) : (
                      <Link to="/Signin" className="order_online">
                        Sign in
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* end header section */}
        {/* slider section */}
        <section className="slider_section ">
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>Welcome to Crave Corner</h1>
                        <p>
                          "Crave Corner" is a user-friendly canteen website that
                          allows users to browse menus, place orders, and make
                          payments online. It offers personalized
                          recommendations, nutritional information, and
                          real-time updates, making it a convenient and
                          satisfying dining experience for students, faculty,
                          and staff.
                        </p>
                        <div className="btn-box">
                          <a
                            href=""
                            className="btn1"
                            style={{ textDecoration: "none" }}
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>Crave Corner Serves </h1>
                        <p>
                          "Crave Corner" offers online ordering, payment, and
                          menu browsing. It also provides nutritional
                          information, customization options, order tracking,
                          feedback mechanisms, and loyalty programs, making it a
                          convenient and user-friendly platform for customers.
                        </p>
                        <div className="btn-box">
                          <a
                            href=""
                            className="btn1"
                            style={{ textDecoration: "none" }}
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>Crave Corner Provides</h1>
                        <p>
                          "Crave Corner" provides features like menu management,
                          inventory tracking, sales reporting, customer
                          management, and integration with payment gateways,
                          making it a comprehensive solution for canteen
                          management and online food ordering.
                        </p>
                        <div className="btn-box">
                          <a
                            href=""
                            className="btn1"
                            style={{ textDecoration: "none" }}
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <ol className="carousel-indicators">
                <li
                  data-target="#customCarousel1"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#customCarousel1" data-slide-to={1} />
                <li data-target="#customCarousel1" data-slide-to={2} />
              </ol>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>
    </>
  );
}

export default Header;
