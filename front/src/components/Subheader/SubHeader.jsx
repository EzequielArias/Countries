import React, { useEffect, useState } from 'react'
import './SubHeader.css'
import { getActivities, orderByAZ, orderByPopulation,searchByName,filterByActivity } from '../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'

const SubHeader = () => {

    const dispatch = useDispatch()
    const activity = useSelector((state) => state.activity)

    useEffect(() => {
      dispatch(getActivities())
    },[dispatch])

    const [search, setSearch] = useState('')

    const handlePopulation = (e) => {
      e.preventDefault()
      dispatch(orderByPopulation(e.target.value))
    }
 
    const handleAZ = (e) => {
      e.preventDefault()
      dispatch(orderByAZ(e.target.value))
    }

    const handleInput = (e) => {
      e.preventDefault()
      setSearch(e.target.value)
    }

    const searchInput = () => {
      dispatch(searchByName(search))
    }

    const handleActivity = (e) => {
      e.preventDefault()
      dispatch(filterByActivity(e.target.value))
    }

    return (
      <div className='nav-container'>
      <div className='search-container'>
        <input 
        placeholder='Search country'
        value={search}
        onChange={handleInput}
        />
          <button 
          className='search-button'
          onClick={searchInput}
        >Buscar</button>
      </div> 
        <div className='filters-container'>
        <select id='OrderBy-HS' onChange={handlePopulation}>
          <option value='' defaultValue={'Ordenar por Poblacion'}>Filtrar por poblacion</option>
          <option value='mayor'>Mayor Poblacion</option>
          <option value='menor'>Menor Poblacion</option>
        </select>

        <select id='FilterByActivity' onChange={handleActivity}>   
            <option 
             defaultValue={'filter by activity'}>Filtrar por actividad</option>
            { 
            activity.map((el) => {
              return (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              )
             })
            }
        </select>

        <select id='OrderBy-AZ' onChange={handleAZ}>
          <option value='' defaultValue={'Ordenar por A-Z'}>Ordenar por A-Z</option>
          <option value='A-Z'>A-Z</option>
          <option value='Z-A'>Z-A</option>
        </select>
        </div>
      </div>
    )
}

export default SubHeader