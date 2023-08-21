import { Link } from 'react-router-dom';

import Form from "../components/Form.jsx";
import {Navbar} from "../components";

const Create = () => {
	return (
		<section>
			<div>
				<Navbar />
			</div>
			<div>
				<Form />
			</div>
		</section>
	)
}

export default Create;