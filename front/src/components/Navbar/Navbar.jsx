import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  let { id } = useParams();
  let location = useLocation();
  console.log(location.pathname)
  return (
    <>
      {
        location.pathname === '/' ? '' : 
        location.pathname === "/home" ? (
          <div className="Navbar-container">
            <div className="nav-box">
              <Link to={"/home/create"} className="btn-detail">
                Crear actividad
              </Link>
            </div>
          </div>
        ) : location.pathname === `/home/${id}` ? (
          <div className="Navbar-container">
            <div className="nav-box">
              <Link to={"/home"} className="btn-detail">
                Ir al Home
              </Link>
            </div>
            <div className="nav-box">
              <Link to={"/home/create"} className="btn-detail">
                Crear actividad
              </Link>
            </div>
          </div>
        ) : (
          <div className="Navbar-container">
            <div className="nav-box">
              <Link to={"/home"} className="btn-detail">
                Ir al Home
              </Link>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Navbar;
