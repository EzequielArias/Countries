import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCountryById } from "../../redux/actions/index";
import './Detail.css'

const Detail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const {
    name,
    flag_image,
    continent,
    sub_region,
    area,
    population,
    capital,
  } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getCountryById(id));
  }, []);

  return (
    <div className='product-detail-container'>
      <Link className="btn-detail" to={'/home'}>
        Ir al Home
      </Link>
      <div className='product-image-container'>
        <img src={flag_image} alt={name} className='product-image' />
      </div>
      <div className='product-info-container'>
        <h2 className='product-name'>{name}</h2>
        <div className='product-info'>
          <div className='product-detail'>
            <h3 className='product-detail-title'>Continent:</h3>
            <p className='product-detail-value'>{continent}</p>
          </div>
          <div className='product-detail'>
            <h3 className='product-detail-title'>Sub-Region:</h3>
            <p className='product-detail-value'>{sub_region}</p>
          </div>
          <div className='product-detail'>
            <h3 className='product-detail-title'>Area:</h3>
            <p className='product-detail-value'>{area} km²</p>
          </div>
          <div className='product-detail'>
            <h3 className='product-detail-title'>Population:</h3>
            <p className='product-detail-value'>{population}</p>
          </div>
          <div className='product-detail'>
            <h3 className='product-detail-title'>Capital:</h3>
            <p className='product-detail-value'>{capital}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;