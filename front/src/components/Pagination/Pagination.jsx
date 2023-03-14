import React from 'react'
import './Pagination.css'

const Pagination = ({totalPosts, postsPerPage, setCurrentPage}) => {
    let pages = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pages.push(i)
    }

  return (
    <div className='pagination-container'>
      {
        pages.map((page, index) => {
            return <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>
        })
      }
    </div>
  )
}

export default Pagination