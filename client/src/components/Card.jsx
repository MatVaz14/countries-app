import { Link } from 'react-router-dom';

import cardStyle from "./styles/Card.css";

const Card = ({id, flag, tag, name}) => {
	return (
		<div className="bg-card">
			<Link to={`/detail/${id}`}><img loading="lazy" src={flag} alt={`${name}`} width="200px" height="150px"/></Link>
		</div>
	)
}

export default Card;