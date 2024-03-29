import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const ORDER_BY_AZ = "ORDER_BY_AZ";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";

export const getCountries = () => {
  return async function (dispatch) {
    let res = await axios.get("https://countries-api.fly.dev/countries");

    return dispatch({
      type: GET_ALL_COUNTRIES,
      payload: res.data,
    });
  };
};

export const orderByAZ = (value) => {
  return async function (dispatch) {
    return dispatch({
      type: ORDER_BY_AZ,
      payload: value,
    });
  };
};

export const orderByPopulation = (value) => {
  return async function (dispatch) {
    return dispatch({
      type: ORDER_BY_POPULATION,
      payload: value,
    });
  };
};

export const searchByName = (name) => {
  return async function (dispatch) {
    return dispatch({
      type: SEARCH_BY_NAME,
      payload: name,
    });
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    let res = await axios.get("https://countries-api.fly.dev/activities");
    return dispatch({
      type: GET_ACTIVITIES,
      payload: res.data,
    });
  };
};

export const filterByActivity = (activityId) => {
  return async function (dispatch) {
    if (activityId === "Filtrar por actividad") {
      return dispatch({
        type: FILTER_BY_ACTIVITY,
        payload: "clean",
      });
    }

    let res = await axios.get(
      `https://countries-api.fly.dev/activities?id=${activityId}`
    );
    return dispatch({
      type: FILTER_BY_ACTIVITY,
      payload: res.data,
    });
  };
};

export const getCountryById = (id) => {
  return async function (dispatch) {
    let res = await axios.get(`https://countries-api.fly.dev/countries/${id}`);
    return dispatch({
      type: GET_COUNTRY_BY_ID,
      payload: res.data[0],
    });
  };
};

export const createActivity = (activity) => {
  return async function (dispatch) {
    try {
      let res = await axios.post("https://countries-api.fly.dev/activities", activity);

      return dispatch({
        type: CREATE_ACTIVITY,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
