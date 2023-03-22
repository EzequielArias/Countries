import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const handleNextBtn = (e) => {
    currentPage === 28
      ? setCurrentPage(currentPage)
      : setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    if(currentPage === 1) return

    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div className="pagination-container">
      <button onClick={handlePrevbtn}>Prev</button>
      {pages.map((page, index) => {
        if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
          return (
            <button 
            key={index} 
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? 'current' : 'notCurrent'}
            >
              {page}
            </button>
          );
        } else {
          return null;
        }
      })}
      <button onClick={handleNextBtn}>Next</button>
    </div>
  );
};

export default Pagination;
