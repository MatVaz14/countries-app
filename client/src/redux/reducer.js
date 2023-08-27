const GET_COUNTRIES = "GET_COUNTRIES";
const FILTER_CONTINENT = "FILTER_CONTINENT";
const GET_COUNTRIES_NAME = "GET_COUNTRIES_NAME";
const FILTER_POPULATION = "FILTER_POPULATION";
const FILTER_ALPH = "FILTER_ALPH";
const GET_LAST_STATE_COUNTRIES = "GET_LAST_STATE_COUNTRIES";

//Estados
//countriesOrigin - todos los paises
//countries - filtros
const initialState = {
  countriesOrigin: [],
  countries: [],
  lastStateCountries: [],
  lastFilter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      
    case GET_COUNTRIES:
      return {
        //Creo uno para guardar todos los paises sin filtro alguno
        countriesOrigin: [...action.payload],
        //Y este para aplicar los filtros
        countries: action.payload,
        lastStateCountries: [...state.countriesOrigin],
      }

    case GET_LAST_STATE_COUNTRIES:
      let lastSC = [...state.lastStateCountries]
      return {
        lastStateCountries: [...lastSC]
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
        lastStateCountries: [...state.countries]
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
        lastStateCountries: filterContinent,
        lastFilter: action.payload
      }

    case FILTER_POPULATION:
      let populationCountries = state.countries.filter(countrie => countrie.population !== 0);
      let countriesPopulation = populationCountries.sort((a, b) => {
        if (a.population > b.population) {
          return "min" === action.payload ? 1 : -1;
        }
        if (a.population < b.population) {
          return "max" === action.payload ? 1 : -1;
        }
      });

      return {
        ...state,
        countries: countriesPopulation,
        lastStateCountries: countriesPopulation,
      }

      case FILTER_ALPH:
      let alph = [...countriesOrigin];
      let countriesAlph = alph.sort((a, b) => {
        if (a.name > b.name) {
          return "a_z" === action.payload ? 1 : -1;
        }
        if (a.name < b.name) {
          return "z_a" === action.payload ? 1 : -1;
        }
      });

      return {
        ...state,
        countries: countriesAlph,
        lastStateCountries: countriesAlph,
      }


      default:
        return { ...state };
    }
}

export default rootReducer;