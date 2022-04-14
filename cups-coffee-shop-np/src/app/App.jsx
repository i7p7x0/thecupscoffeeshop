import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../layouts/header/Header";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
