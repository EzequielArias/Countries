import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions/index";
import Pagination from "../../components/Pagination/Pagination";
import Card from "../../components/Card/Card";
import SubHeader from "../../components/Subheader/SubHeader";
import Loader from "../../components/Loader/Loader";
import "./Home.css";

const Home = () => {
  let countries = useSelector((state) => {
    //state.filtered.length ? state.filtered : state.countries
    if (state.filterActivity.length) {
      return state.filterActivity;
    } else if (state.filtered.length) {
      return state.filtered;
    } else {
      return state.countries;
    }
  });

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const lastPostsIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostsIndex - postsPerPage;
  const currentPosts = countries.slice(firstPostsIndex, lastPostsIndex);

  return (
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
            totalPosts={countries.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
};

export default Home;
