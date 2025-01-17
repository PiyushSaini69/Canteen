import React from "react";
import Footer from "../Main/Footer";
import Header from "../Main/Header";
import Food from "../Main/Food";

function Menu() {
  return (
    <>
      <div className="sub_page">
        <div className="hero_area">
          <div className="bg-box">
            <img src="images/hero-bg.jpg" alt="" />
          </div>
          {/* header section strats */}
          <Header />
          {/* end header section */}
        </div>
        {/* food section */}
        <Food />
        {/* end food section */}
        {/* footer section */}
        <Footer />
      </div>
    </>
  );
}

export default Menu;
