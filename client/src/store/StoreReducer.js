import {
  GET_COUNTRIES,
  SEARCH,
  PAGE,
  INDEX,
  INDEX_BTN,
  LOADING,
  LOADING_DETAIL,
  FILTER_POPULATION,
  FILTER_ALPH,
  FILTER_CONTINENT,
  RESET,
} from "./ActionType.js";

const InitialState = {
  countriesOrigin: [],
  countries: [],
  currentPage: 1,
  cantPerPage: 8,
  indexOne: 0,
  indexTwo: 8,
  minBtn: 0,
  maxBtn: 5,
  isLoading: false,
  isLoadingDetail: false,
};

const StoreReducer = (state = InitialState, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        countries: [...state.countriesOrigin],
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countriesOrigin: [...action.payload],
        countries: [...action.payload],
      };
    case SEARCH:
      let countrieSearch = [...state.countriesOrigin];
      let search = [];

      if (action.payload.length === 0) {
        search = [...countrieSearch];
      } else {
        search = countrieSearch?.filter((countrie) =>
          countrie.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
      return {
        ...state,
        countries: [...search],
      };

    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case LOADING_DETAIL:
      return {
        ...state,
        isLoadingDetail: action.payload,
      };

    case PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case INDEX:
      return {
        ...state,
        indexOne: action.payload[0],
        indexTwo: action.payload[1],
      };

    case INDEX_BTN:
      return {
        ...state,
        minBtn: action.payload[0],
        maxBtn: action.payload[1],
      };

    case FILTER_POPULATION:
      let dataPopulation = [...state.countries];
      let filterPopulation = [];
      if (action.payload === "min") {
        filterPopulation = dataPopulation.sort(function (a, b) {
          if (a.population > b.population) {
            // Cambiar el orden aquí
            return 1;
          }
          if (a.population < b.population) {
            return -1;
          }

          return 0;
        });
      }
      if (action.payload === "max") {
        filterPopulation = dataPopulation.sort(function (a, b) {
          if (a.population < b.population) {
            return 1;
          }
          if (a.population > b.population) {
            return -1;
          }

          return 0;
        });
      }
      if (action.payload === "defaultPopulation") {
        filterPopulation = [...state.countriesOrigin];
      }
      return {
        ...state,
        countries: filterPopulation,
      };

    case FILTER_ALPH:
      let dataAlph = [...state.countries];
      let filterAlph = [];
      if (action.payload === "a_z") {
        filterAlph = dataAlph.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      }
      if (action.payload === "z_a") {
        filterAlph = dataAlph.sort(function (a, b) {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      }

      if (action.payload === "defaultAlph") {
        filterAlph = [...state.countriesOrigin];
      }
      return {
        ...state,
        countries: filterAlph,
      };

    case FILTER_CONTINENT:
      let dataContinent = [...state.countries];
      let filterContinent = [];

      if (action.payload === "defaultContinent") {
        filterContinent = [...state.countriesOrigin];
      } else {
        filterContinent = dataContinent.filter(
          (countrie) =>
            countrie.continent.toLowerCase() === action.payload.toLowerCase()
        );
      }

      return {
        ...state,
        countries: filterContinent,
      };

    default:
      return {
        ...state,
      };
  }
};

export { InitialState };
export default StoreReducer;
