import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import CreateForm from "./pages/CreateForm/CreateForm";
import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home/create" element={<CreateForm/>} />
          <Route path="/home/:id" element={<Detail/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Landing/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
