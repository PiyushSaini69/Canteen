import React from "react";
import Footer from "../Main/Footer";
import Header from "../Main/Header";
import Book from "../Main/Book";

function BookTable() {
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
        {/* book section */}
        <Book />
        {/* end book section */}
        {/* footer section */}
        <Footer />
      </div>
    </>
  );
}

export default BookTable;
