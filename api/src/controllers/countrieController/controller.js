const axios = require("axios");
const { Country,Activity } = require("../../db.js");

const getApiCountries = async () => {
  let allInfo = await axios.get("https://restcountries.com/v3/all");
  let api = allInfo?.data.map((e) => {
    return {
      tag: e.cioc ? e.cioc : (e.cca3 ? e.cca3 : "Not Found"),
      name: e.name.common,
      flag: e.flags[1],
      continent: e.continents[0],
      capital: e.capital ? e.capital[0] : "Dato no encontrado",
      timezones: e.timezones[0] ? e.timezones[0] : "Dato no encontrado",
      population: e.population ? e.population : "0",
      region: e.region ? e.region : "Dato no encontrado",
      area: e.area ? e.area : "Dato no encontrado",
      subregion: e.subregion ? e.subregion : "Dato no encontrado",
      maps: e.maps.googleMaps ? e.maps.googleMaps : "Dato no encontrado",
    };
  });
  return api;
};

const uploadDb = async () => {
  let info = await getApiCountries();
  let data = await Country.findAll();
  if(!data.length){
    await Country.bulkCreate(info);
    console.log("Database Created")
  }
  return;
}

const infoDb = async () => {
  let info = await Country.findAll({
      include: [{ model: Activity}],
    });
  return info;
}

module.exports = {
  getApiCountries,
  uploadDb,
  infoDb
};
