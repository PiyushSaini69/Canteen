import { useEffect, useState } from "react";
import About from "./Main/About";
import Book from "./Main/Book";
import Client from "./Main/Client";
import Food from "./Main/Food";
import Footer from "./Main/Footer";
import Header from "./Main/Header";
import Offer from "./Main/Offer";
function Main() {
  return (
    <>
      <main id="main">
        <Header />
        <Offer />
        <Food />
        <About />
        <Book />
        <Client />
        <Footer />
      </main>
    </>
  );
}

export default Main;
