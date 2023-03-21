import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
  let location = useLocation();
  let { id } = useSelector((state) => state.detail)

  return (
    <>
      {location.pathname === "/" ? (
        ""
      ) : location.pathname === "/home" ? (
        <div className="Navbar-container">
          <div className="nav-box">
            <Link to={"/home/create"} className="link-nav">
              Crear actividad
            </Link>
          </div>
        </div>
      ) : location.pathname === `/home/${id}` ? (
        <div className="Navbar-container">
          <div className="nav-box">
            <Link to={"/home"} className="link-nav">
              Ir al Home
            </Link>
          </div>
          <div className="nav-box">
            <Link to={"/home/create"} className="link-nav">
              Crear actividad
            </Link>
          </div>
        </div>
      ) : (
        <div className="Navbar-container">
          <div className="nav-box">
            <Link to={"/home"} className="link-nav">
              Ir al Home
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
