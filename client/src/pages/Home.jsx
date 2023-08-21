import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Filter } from "../components";

const AllCards = lazy(() => import('../components/AllCards.jsx'));

const Home = () => {
	return (
		<section>
			<div>
				Navbar
				<Link to="/create">Crear Actividad</Link>
			<div>
				<Filter />
			</div>
			</div>
			<div>
				<Suspense fallback={<h1>Cargando ...</h1>}>
					<AllCards />
				</Suspense>
			</div>
		</section>
	)
}

export default Home;