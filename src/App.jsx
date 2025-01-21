import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Productcard from "./components/productcard.jsx";

function App() {
  const cards = Array.from({ length: 10 });
  const productData = {
    image: reactLogo,
    name: "React Logo",
    price: "₹149",
  };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
    padding: "16px",
  };

  return (
    <div style={gridStyle}>
      {cards.map((_, index) => (
        <Productcard key={index} productData={productData} />
      ))}
    </div>
  );
}

export default App;
