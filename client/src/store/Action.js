import axios from "axios";

export const getCountries = async () => {
  let countries = await axios.get("http://localhost:3002/countries");
  return countries.data;
};
