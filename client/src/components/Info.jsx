import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import { HiUserGroup } from 'react-icons/hi';
import { BiTimeFive } from 'react-icons/bi';
import { BsPaperclip } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import { FaChartArea } from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';

import styleInfo from "./styles/Info.css";

const Info = () => {
	
	const { id } = useParams();

	  const [Countrie, setCountrie] = useState([]);

  		useEffect(() => {
    		axios
      		.get(`http://localhost:3002/getDetail/${id}`)
      		.then((response) => setCountrie(response.data[0]));
  			}, [id]);
	return (
		<div className="container-info">
			<div className="bg-container-img">
				<img className="style-img-flag" src={Countrie.flag} alt={`${Countrie.name}`} width='500px' height='300px'/>
				<h1>{Countrie.tag} - {Countrie.name}</h1>
			</div>	
			<div className="bg-container-info-text">
				<span>
				<GiPositionMarker /> Continent: {Countrie.continent} <br/>
				<GiPositionMarker /> Region: {Countrie.region} <br/>
				<GiPositionMarker /> Subregion: {Countrie.subregion} <br/>
				<GiPositionMarker /> Capital: {Countrie.capital} <br/>
				<FaChartArea /> Area: {Countrie.area} m2<br/>
				<HiUserGroup /> Población: {Countrie.population} <br/>
				<BiTimeFive /> Timezones: {Countrie.timezones} <br/>
				<FiMapPin /> Map: <a href={`${Countrie.maps}`} target="_blank">Ver en Google Maps</a>
				</span>
			</div>

			<div className="bg-container-activity">
				<h1>Actividades Creadas</h1>
				{
					Countrie.Activities?.length === 0 ? <span className="notif-create">Aun no has creado actividades para este País. <Link className="style-link-create" to='/create'>Crea Una!</Link></span> : null
				}
				<div className="container-activities">
					{
					Countrie.Activities?.map(activity =>( 
						<div className="container-activity">
							<h1><BsPaperclip /> {activity.name}</h1>
							<hr />
							<h2>Duracion: {activity.duration}</h2>
							<h2>Dificultad: {activity.difficulty}</h2>
							<h2>Temporada: {activity.season}</h2>
						</div>
					))
				}
				</div>
			</div>
		</div>
	);
}

export default Info;