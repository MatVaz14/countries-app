const { Activity } = require("../../db.js");

const createActivity = async (name, difficulty, duration, season, CountryId) => {
    let formattedSeason;

    if (Array.isArray(season)) {
        formattedSeason = season.join(', ');
    } else {
        formattedSeason = season;
    }

    const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season: formattedSeason,
    });

    await newActivity.addCountry(CountryId);
    return newActivity;
}

module.exports = {
    createActivity,
}