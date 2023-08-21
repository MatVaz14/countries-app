import { Link } from 'react-router-dom';

const Card = ({id, flag, tag, name}) => {
	return (
		<div>
			<Link to={`/detail/${id}`}><img src={flag} alt={`${name}`} width="200px" height="150px"/></Link>
		</div>
	)
}

export default Card;