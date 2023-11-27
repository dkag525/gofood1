import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import Carousal from "../../Components/Carousal.jsx/Carousal";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div className="m-3">
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
