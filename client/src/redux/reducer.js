const GET_COUNTRIES = "GET_COUNTRIES";
const FILTER_CONTINENT = "FILTER_CONTINENT";
const GET_COUNTRIES_NAME = "GET_COUNTRIES_NAME";

const initialState = {
  countriesOrigin: [],
  countries: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      
    case GET_COUNTRIES:
      return {
        //Creo uno para guardar todos los paises sin filtro alguno
        countriesOrigin: [...action.payload],
        //Y este para aplicar los filtros
        countries: action.payload
      }

    case GET_COUNTRIES_NAME:
      let dataName = [...state.countriesOrigin];
      let filterContinentName = [];
      if(action.payload.length > 0){
        filterContinentName = dataName?.filter(countrie => countrie.name.toLowerCase().includes(action.payload.toLowerCase()))
      }else{
        filterContinentName = [...dataName];
      }
      return {
        ...state,
        countries: filterContinentName,
      }

    case FILTER_CONTINENT:
      //Hago una copia de countriesOrigin
      let data = [...state.countriesOrigin];
      let filterContinent = [];

      if(action.payload === 'continent'){
        filterContinent = [...state.countriesOrigin]
      }else{
        filterContinent = data.filter(countrie => (countrie.continent).toLowerCase() === (action.payload).toLowerCase());
      }
      return {
        ...state,
        countries: filterContinent,
      }

      default:
        return { ...state };
    }
}

export default rootReducer;