import axios from 'axios';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from "../redux/action";

import swal from "sweetalert";

const Form = () => {

	const dispatch = useDispatch();

	let countries = useSelector((state) => state.countries)

	const [nameCountrie, setNameCountrie] = useState('');
	const [filterCountrie, setFilterCountrie] = useState([...countries]);

	useEffect(() => {
		dispatch(getCountries());
		setFilterCountrie(countries)
	},[])

	const [dataForm, setDataForm] = useState({
		name: '',
		durationHs: '',
		durationMin: '',
		difficulty: '',
		season: [],
		CountryId: [],
	})

	const searchCountrie = (event) => {
		event.preventDefault();
		setNameCountrie(event.target.value);
		if(nameCountrie.length > 1){
			setFilterCountrie(filterCountrie.filter(countrie => countrie.name.toLowerCase().includes(nameCountrie.toLowerCase())))
		}else{
			setFilterCountrie([...countries])
		}
	}

	const handleInputs = (event) => {
		console.log(dataForm.difficulty)
		let value = event.target.name;

		if(value !== 'CountryId' && value !== 'season'){
			setDataForm({
      			...dataForm,
      			[event.target.name]: event.target.value,
    		});
    	}

    	if(value === 'season'){
    		if(event.target.checked){
    			dataForm.season.find(season => season === event.target.value) ? null : setDataForm({
      				...dataForm,
      				[event.target.name]: [...dataForm.season, event.target.value],
    			});
    		}
    		if(!event.target.checked){
    			let seasons = dataForm.season.filter(season => season !== event.target.value);
    			setDataForm({
      				...dataForm,
      				season: seasons,
    			});
    		}
    	}

    	 if(value === 'CountryId'){
    		if(event.target.checked){
    			dataForm.CountryId.find(season => season === event.target.value) ? null : setDataForm({
      				...dataForm,
      				[event.target.name]: [...dataForm.CountryId, event.target.value],
    			});
    		}
    		if(!event.target.checked){
    			let CountryIds = dataForm.CountryId.filter(country => country !== event.target.value);
    			setDataForm({
      				...dataForm,
      				CountryId: CountryIds,
    			});
    		}
    	}

	}

	const handleSubmit = (event) => {
		event.preventDefault();

		axios.post("http://localhost:3002/activity", {
			name: dataForm.name,
			duration: dataForm.durationHs + " hs" + dataForm.durationMin + " min",
			difficulty: dataForm.difficulty,
			season: dataForm.season,
			CountryId: dataForm.CountryId
		});

		swal({
      		title: "Actividad creada correctamente!",
      		icon: "success",
      		button: "Aceptar",
    	});

		event.target.reset();
		setDataForm({
		name: '',
		durationHs: '',
		durationMin: '',
		difficulty: '',
		season: [],
		CountryId: [],
	});
	}

	return (
		<form onSubmit={(event) => handleSubmit(event)}>
			<div>
			<input onChange={searchCountrie}/>
				{
					filterCountrie?.map((countrie) => (<label key={countrie.id}><input onChange={handleInputs} name="CountryId" type="checkbox" value={countrie.id}/> {countrie.name}</label>))
				}
			</div>

			<div>
				<label>Nombre <input onChange={handleInputs} type="text" name="name"/></label>
				<label>Duracion <input onChange={handleInputs} type="text" name="durationHs"/> hs <input onChange={handleInputs} type="text" name="durationMin"/> min</label>
			</div>

			<div>
				<label><input onChange={handleInputs} name="difficulty" type="radio" value="1"/> 1</label>
				<label><input onChange={handleInputs} name="difficulty" type="radio" value="2"/> 2</label>	
				<label><input onChange={handleInputs} name="difficulty" type="radio" value="3"/> 3</label>	
				<label><input onChange={handleInputs} name="difficulty" type="radio" value="4"/> 4</label>	
				<label><input onChange={handleInputs} name="difficulty" type="radio" value="5"/> 5</label>		
			</div>

			<div>
				<label><input onChange={handleInputs} type="checkbox" name="season" value="Verano"/> Verano</label>
				<label><input onChange={handleInputs} type="checkbox" name="season" value="Invierno"/> Invierno</label>
				<label><input onChange={handleInputs} type="checkbox" name="season" value="Otoño"/> Otoño</label>
				<label><input onChange={handleInputs} type="checkbox" name="season" value="Primavera"/> Primavera</label>
			</div>

			<button type='submit'>Crear</button>
		</form>
	)
}

export default Form;