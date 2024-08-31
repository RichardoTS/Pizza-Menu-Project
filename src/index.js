import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Modules
import Menu from "./menu";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <div className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  //   hour >= openHour && hour <= closeHour
  //     ? alert("We're currently open!")
  //     : alert("Sorry we're close")

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open!
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
