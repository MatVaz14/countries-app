import { Link } from 'react-router-dom';

import Form from "../components/Form.jsx";

const Create = () => {
	return (
		<section>
			<Link to="/home">Volver</Link>
			<div>
				<Form />
			</div>
		</section>
	)
}

export default Create;