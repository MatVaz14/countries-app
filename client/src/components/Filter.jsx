import { useState } from "react";
import { useDispatch, useStore } from "../store/StoreProvider.js";

import "./styles/Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const store = useStore();

  const { cantPerPage } = store;
  const [reset, setReset] = useState(1);

  const handleCLick = (event) => {
    setReset(0);
    dispatch({ type: "RESET" });
    dispatch({ type: "PAGE", payload: 1 });
    dispatch({ type: "INDEX", payload: [0, cantPerPage] });
    dispatch({ type: "INDEX_BTN", payload: [0, 5] });
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === "population") {
      dispatch({ type: "PAGE", payload: 1 });
      dispatch({ type: "INDEX", payload: [0, cantPerPage] });
      dispatch({ type: "INDEX_BTN", payload: [0, 5] });
      dispatch({ type: "FILTER_POPULATION", payload: value });
    }
    if (name === "alph") {
      dispatch({ type: "PAGE", payload: 1 });
      dispatch({ type: "INDEX", payload: [0, cantPerPage] });
      dispatch({ type: "INDEX_BTN", payload: [0, 5] });
      dispatch({ type: "FILTER_ALPH", payload: value });
    }
    if (name === "continent") {
      dispatch({ type: "PAGE", payload: 1 });
      dispatch({ type: "INDEX", payload: [0, cantPerPage] });
      dispatch({ type: "INDEX_BTN", payload: [0, 5] });
      dispatch({ type: "FILTER_CONTINENT", payload: value });
    }
  };

  return (
    <div className="container_Filter">
      <button onClick={handleCLick}>RESET FILTERS</button>
      <div className="container-select">
        <select onChange={handleChange} name="continent">
          <option
            defaultValue="continent"
            value="defaultContinent"
            selected={reset === 0 ? true : false}
          >
            Continent
          </option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctica">Antarctica</option>
        </select>
        <select onChange={handleChange} name="population">
          <option
            value="defaultPopulation"
            selected={reset === 0 ? true : false}
          >
            Population
          </option>
          <option value="max">Major</option>
          <option value="min">Minor</option>
        </select>
        <select onChange={handleChange} name="alph">
          <option value="defaultAlph" selected={reset === 0 ? true : false}>
            Alphabetical
          </option>
          <option value="a_z">A - Z</option>
          <option value="z_a">Z - A</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
