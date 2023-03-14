const { Activity, Country,Pivot } = require("../db.js");

const createActivity = async (req, res) => {
  let { name, difficulty, duration, season, nation } = req.body;

  try {
    let country = await Country.findAll({
      where: {
        id: nation,
      },
    });

    let activity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
      nation,
    });

    await activity.addCountry(country);

    res.status(200).json(country);
  } catch (error) {
    console.log(error)
    res.status(500).send(`err : ${error.message}`);
  }
};


const getActivitiesOrFilter = async (req, res) => {
  let { id } = req.query;
  let getAct = await Activity.findAll();
  
  if(!id){
    res.json(getAct).status(200)
    return
  }     

  try {
      let result = await Pivot.findAll({
        where : {
          activityId : id
        }
      })
      
      let countriesID = result.map(el => {
        return el.countryId
      })

      let data = await Country.findAll({
        where : {
          id : countriesID
        }
      })

      res.json(data).status(200);

  } catch (error) {
    res.status(500).json(`err : ${error.message}`)
  }
};

module.exports = { createActivity, getActivitiesOrFilter };
