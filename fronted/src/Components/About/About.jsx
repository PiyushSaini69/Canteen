import React from "react";
import Footer from "../Main/Footer";
import Header from "../Main/Header"

function About() {
  return (
    <>
      <div className="sub_page">
        <div className="hero_area">
          <div className="bg-box">
            <img src="images/hero-bg.jpg" alt="" />
          </div>
          {/* header section strats */}
          <Header/>
          <header className="header_section">
            <div className="container">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="index.html">
                  <span>Crave Corner</span>
                </a>
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
                    <li className="nav-item ">
                      <a className="nav-link" href="index.html">
                        Home{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="menu.html">
                        Menu
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="about.html">
                        About <span className="sr-only">(current)</span>{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="book.html">
                        Book Table
                      </a>
                    </li>
                  </ul>
                  <div className="user_option">
                    <a href="" className="user_link">
                      <i className="fa fa-user" aria-hidden="true" />
                    </a>
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
                    <a href="" className="order_online">
                      Order Online
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          {/* end header section */}
        </div>
        {/* about section */}
        <section className="about_section layout_padding">
          <div className="container  ">
            <div className="row">
              <div className="col-md-6 ">
                <div className="img-box">
                  <img src="images/about-img.png" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>We Are Feane</h2>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end about section */}
        {/* footer section */}
        <Footer/>
      </div>
    </>
  );
}

export default About;
