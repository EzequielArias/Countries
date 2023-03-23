import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions/index";
import Pagination from "../../components/Pagination/Pagination";
import Card from "../../components/Card/Card";
import SubHeader from "../../components/Subheader/SubHeader";
import Loader from "../../components/Loader/Loader";
import NotFound from "../../NotFound/NotFound";
import "./Home.css";

const Home = () => {
  let countriesFilter = useSelector((state) => {
    return {
      filtered: state.filtered,
      err: state.e404,
    }
  })
let countries = useSelector((state) => state.countries)
let totalPosts = countriesFilter.filtered.length ? countriesFilter.filtered.length : countries.length
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const lastPostsIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostsIndex - postsPerPage;
  const currentPosts =  countriesFilter.filtered && countriesFilter.filtered.length > 0
    ? countriesFilter.filtered.slice(firstPostsIndex, lastPostsIndex)
    : countries.slice(firstPostsIndex, lastPostsIndex);
    
  return (
    <>
      {countries.err ? (
        <>
          <SubHeader />
          <NotFound />
        </>
      ) : (
        <>
          <SubHeader />
          {currentPosts.length === 0 ? (
            <Loader />
          ) : (
            <div className="background-wallpaper">
              <div className="home_card_container">
                {currentPosts.map((el) => {
                  return (
                    <Card
                      key={el.id}
                      id={el.id}
                      name={el.name}
                      flag_image={el.flag_image}
                      continent={el.continent}
                    />
                  );
                })}
              </div>
              <Pagination
                totalPosts={totalPosts}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Home;
