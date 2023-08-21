import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from "../redux/action";

const Landing = () => {

	const dispatch = useDispatch();

	 useEffect(() => {
    	dispatch(getCountries());
  	}, [dispatch]);

	return (
		<section>
			<h1>Landing</h1>
			<Link to="/home">Iniciar</Link>
		</section>
	)
}

export default Landing;