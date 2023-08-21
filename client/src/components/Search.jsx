import searchStyle from "./styles/Search.css";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { searchName,getCountries } from "../redux/action";

const Search = () => {

	const dispatch = useDispatch();

	const [name, setName] = useState('');

	const handleInput = (event) => {
		setName(event.target.value)
	} 

	useEffect(() => {
		console.log(name)
		if(name.length === 0){
			dispatch(getCountries());
			return;
		}
		if(name.length >= 1){
			dispatch(searchName(name))
		}
	},[name])

	return (
		<div>
			<input className="style-input-name" placeholder="Buscar pais (en inglés)" onChange={handleInput} name="search"/>
		</div>
	)
}

export default Search;