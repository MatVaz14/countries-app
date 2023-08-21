import { Link } from 'react-router-dom';
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import styleNav from "./styles/Navbar.css";
import Search from "./Search.jsx";

const Navbar = () => {

	const [active, setActive] = useState(false);

	return (
		<nav>
			<h1 className="text-nav">C<span>ountries</span></h1>
			<div className="search-nav">
				<Search />
			</div>
			<div className="container-links-nav">
				<Link to={`/home`} className="style-link-nav"><span>Inicio</span></Link>
				<Link to={`/create`} className="style-link-nav"><span>Crear Actividad</span></Link>
			</div>
			<div className="container-links-menu">
				{
					!active ? <GiHamburgerMenu className="style-button-menu" onClick={() => setActive(true)}/> : <AiOutlineClose className="style-button-menu" onClick={() => setActive(false)}/>
				}
				<div className={`${active ? 'menu' : 'no-menu'}`}>
					<Link to={`/home`} className="style-link-nav-menu"><span>Inicio</span></Link>
					<Link to={`/create`} className="style-link-nav-menu"><span>Crear Actividad</span></Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;