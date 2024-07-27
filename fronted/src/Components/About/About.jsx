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
                    <h2>About Us</h2>
                  </div>
                  <p>
                  "Crave Corner" is a user-friendly canteen website that allows users to browse menus, place orders, and make payments online. It offers personalized recommendations, nutritional information, and real-time updates, making it a convenient and satisfying dining experience for students, faculty, and staff
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
