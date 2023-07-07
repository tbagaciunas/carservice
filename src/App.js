import React from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavbarBlack from "./NavbarBlack";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
