import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries,getLastStateCountries } from "../redux/action";

import Card from "./Card.jsx";
import allCardsStyle from "./styles/AllCards.css";

import Paginate from "./Paginate.jsx";

const AllCards = () => {

	const dispatch = useDispatch();
	let lastStateCountries = useSelector((state) => state.lastStateCountries);

		useEffect(() => {
			dispatch(getCountries());
	},[])

	return (
		<div>
		<div className="container-cards">
			{
				lastStateCountries?.map((countrie) => (
					<Card 
					key={countrie.id}
					id={countrie.id}
					flag={countrie.flag} 
					name={countrie.name}/>
				))
			}
		</div>
		</div>
	)
}

export default AllCards;