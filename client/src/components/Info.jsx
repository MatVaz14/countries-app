import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const Info = () => {
	
	const { id } = useParams();

	  const [Countrie, setCountrie] = useState([]);

  		useEffect(() => {
    		axios
      		.get(`http://localhost:3002/getDetail/${id}`)
      		.then((response) => setCountrie(response.data[0]));
  			}, [id]);
	return (
		<div>
			<div>
				<img src={Countrie.flag} alt={`${Countrie.name}`} width='300px' height='250px'/>
				<h1>{Countrie.tag} - {Countrie.name}</h1>
			</div>	
			<div>
				<h1>Map: <a href={`${Countrie.maps}`} target="_blank">Ver en Google Maps</a></h1>
				<span>
				continent: {Countrie.continent} <br/>
				region: {Countrie.region} <br/>
				subregion: {Countrie.subregion} <br/>
				capital: {Countrie.capital} <br/>
				area: {Countrie.area} <br/>
				Población: {Countrie.population} <br/>
				timezones: {Countrie.timezones} <br/>
				</span>
			</div>

			<div>
				Actividades Creadas
				{
					Countrie.Activities?.map(activity =>( 
					<div>
					<h1>Nombre: {activity.name}</h1>
					<h2>Duracion: {activity.duration}</h2>
					<h2>Dificultad: {activity.difficulty}</h2>
					<h2>Temporada: {activity.season}</h2>
				</div>
				))
				}
			</div>
		</div>
	);
}

export default Info;