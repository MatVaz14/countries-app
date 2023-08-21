import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from "../redux/action";

import Card from "./Card.jsx";

const AllCards = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCountries());
	},[])

	let AllCountries = useSelector((state) => state.countries);

	return (
		<div>
			{
				AllCountries?.map((countrie) => (
					<Card 
					key={countrie.id}
					id={countrie.id}
					flag={countrie.flag} 
					name={countrie.name}/>
				))
			}
		</div>
	)
}

export default AllCards;