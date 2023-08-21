const { createActivity } = require("../../controllers/activityController/controller.js");

const postActivity = async (req,res) => {
	const { name, difficulty, duration, season, CountryId } = req.body;
	try{
		const create = await createActivity(name, difficulty, duration, season, CountryId);
		res.status(201).send(create);
	}catch(error){
		res.status(400).json({ error: "Error al crear actividad" })
	}
}

module.exports = {
	postActivity
}

