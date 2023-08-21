import axios from "axios";

const GET_COUNTRIES = "GET_COUNTRIES";
const FILTER_CONTINENT = "FILTER_CONTINENT";
const FILTER_POPULATION = "FILTER_POPULATION";
const FILTER_ALPH = "FILTER_ALPH";
const GET_COUNTRIES_NAME = "GET_COUNTRIES_NAME";

export const getCountries = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3002/countries")
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_COUNTRIES, payload: data })); //hacemos el dispatch y la action va al reducer, el reducer la recibe y ya trabajamos con la info
  };
};

export const searchName = (name) => {
  return function(dispatch) {
    dispatch({type: GET_COUNTRIES_NAME, payload: name})
  }
}

export const filterContinent = (continent) => {
  return function(dispatch) {
    dispatch({type: FILTER_CONTINENT, payload: continent})
  }
}

export const filterPopulation = (population) => {
  return function(dispatch) {
    dispatch({type: FILTER_POPULATION, payload: population})
  }
}

export const filterAlph = (alph) => {
  return function(dispatch) {
    dispatch({type: FILTER_ALPH, payload: alph})
  }
}