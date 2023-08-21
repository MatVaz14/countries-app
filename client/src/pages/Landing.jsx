import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from "../redux/action";
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

import styleLanding from "./styles/Landing.css";
import continents from "../assets/continents.png"

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Landing = () => {

	const dispatch = useDispatch();

	 useEffect(() => {
    	dispatch(getCountries());
  	}, [dispatch]);

	return (
		<section className="bg-primary">
			<div className="container">
				<a href="https://www.linkedin.com/in/matiasevazquez/" target="_blank" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100"><FaLinkedin className="social"/></a>
				<a href="https://github.com/MatVaz14" target="_blank" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="150"><FaGithubSquare className="social"/></a>
			</div>
			
			<div className="container-two">
				<div className="container-text">
					<h1 className="text-h1" data-aos="fade-up" data-aos-duration="1000">C<span className="text-sm">ountries</span></h1>
					<div className="bg-linear circle-button" data-aos="fade-down" data-aos-duration="1000">
						<Link to="/home" className="style-link-home">
							<div className="bg-primary bg-circle-button">
								<span className="arrow-bg">→</span>
							</div>
						</Link>
					</div>
				</div>

				<div className="container-img">
					<img src={continents} loading="lazy" alt="continents" width="650px" height="450px" data-aos="fade-left"  data-aos-duration="1000"/>
					<div className="blue__gradient"/>
					<div className="celeste__gradient"/>
					<div className="pink__gradient"/>
				</div>
			</div>
		</section>
	)
}

export default Landing;