import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Modules
import Menu from "./menu";
import Footer from "./footer";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
