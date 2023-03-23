import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'
import { searchByName } from "../redux/actions";
import { useDispatch } from "react-redux";

const NotFound = () => {
    let dispatch = useDispatch()
    const handleBtn = () =>{
        dispatch(searchByName(''))
    }
    return (
        <div className="notFound">
        <div className="notFound-container">
            <span>404</span>
            <p>Lo sentimos, no encontramos lo que estas buscando.</p>
            <br/>
            <p className="attention">Revisa el nombre del pais podria estar mal escrito !!</p>
            <button 
            className="NotFound-button" 
            onClick={handleBtn}>Volver al Home</button>
        </div>
        </div>
    )
}

export default NotFound;