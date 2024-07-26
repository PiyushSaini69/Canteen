import { useEffect, useState } from "react";
import About from "./Main/About";
import Book from "./Main/Book";
import Client from "./Main/Client";
import Food from "./Main/Food";
import Footer from "./Main/Footer";
import Header from "./Main/Header";
import Offer from "./Main/Offer";
function Main() {
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

  console.log(location);
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
