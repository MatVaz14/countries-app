import { Link } from 'react-router-dom';

import Info from "../components/Info.jsx";

const Detail = () => {
	return (
		<section>
			<h1>Detalles</h1>
			<Link to="/home">Volver a home</Link>
			<Info />
		</section>
	)
}

export default Detail;