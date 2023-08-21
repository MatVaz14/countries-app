import { useDispatch } from "react-redux";
import { getCountries,filterContinent,filterPopulation, filterAlph } from "../redux/action.js";

import styleFilter from "./styles/Filter.css";
import Search from "./Search.jsx";

const Filter = () => {

	const dispatch = useDispatch();

	const handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		if(name === "continent"){
		dispatch(filterContinent(value))
		}
		if(name === "population"){
		dispatch(filterPopulation(value))
		}
		if(name === "alph"){
			dispatch(filterAlph(value));
		}
	}

	return (
		<div className="container-filter">
			<div className="container-rest-search">
				<div onClick={() => dispatch((getCountries()))} className="bg-linear style-btn-rest">
					<div onClick={() => dispatch((getCountries()))} className="bg-primary btn-rest">
						<span onClick={() => dispatch((getCountries()))}>Restablecer</span>
					</div>
					</div>
				<div className="search-mobile">
					<Search />
				</div>
			</div>
			<div className="container-select">
				<select onChange={handleChange} name="continent">
				<option defaultValue="continent" value="continent">Continente</option>
				<option value="North America">America del Norte</option>
				<option value="South America">America del Sur</option>
				<option value="Europe">Europa</option>
				<option value="Asia">Asia</option>
				<option value="Africa">Africa</option>
				<option value="Oceania">Oceanía</option>
				<option value="Antarctica">Antartida</option>
			</select>
			<select onChange={handleChange} name="population">
				<option>Población</option>
				<option value="max">Mayor</option>
				<option value="min">Menor</option>
			</select>
			<select onChange={handleChange} name="alph">
				<option>Alfabetico</option>
				<option value="a_z">A- Z</option>
				<option value="z_a">Z- A</option>
			</select>
			</div>
		</div>
	)
}

export default Filter;