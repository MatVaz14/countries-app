const {
  getApiCountries,
  infoDb
} = require("../../controllers/countrieController/controller.js");

const getCountries = async (req, res) => {
  const { name } = req.query;
  
  try {
    if(name){
      const data = await infoDb();
      const info = data.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
      res.status(200).send(info);
    }else{
      const data = await infoDb();
      res.status(200).send(data);
    }
  } catch (error) {
    res.status(400).json({ error: message.error });
  }
};

const getCountrieDetail = async (req,res) => {
  const {id} = req.params;
  try {
    const data = await infoDb();
    const info = data.filter(d => d.id == id);
    res.status(200).send(info);
  }catch(error){
    res.status(400).json({ error: message.error });
  }
}

module.exports = {
  getCountries,
  getCountrieDetail
};
