const axios = require("axios");
const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");

const fillDB = async (req, res) => {
  let db = await Country.findAll({ include: [{ model: Activity }] });
  if (db.length > 0) {
    console.log("primer instancia");
    return db;
  } else {
    try {
      let get = await axios.get("https://restcountries.com/v3/all");

      let countries = get.data.map((country) => ({
        id: country.cca3,
        name: country.name.common.toLowerCase(),
        flag_image: country.flags[1],
        continent: country.continents[0],
        sub_region:
          country.subregion === undefined ? "unknow" : country.subregion,
        area: country.area,
        population: country.population,
        capital: country.capital === undefined ? "unknown" : country.capital[0],
      }));

      await Country.bulkCreate(countries);
      console.log("data agregada");
    } catch (error) {
      console.log(error);
    }

    /* for (let i = 0; i < list.length; i++) {
    
        await Country.create({
            id : list[i].cca3,
            name : (list[i].name.common).toLowerCase(),
            flag_image : list[i].flags[1],
            continent : list[i].continents[0],
            sub_region : list[i].subregion === undefined ? 'unknow' : list[i].subregion,
            area : list[i].area,
            population : list[i].population,
            capital : list[i].capital === undefined ? 'unknown' : list[i].capital[0]
        })      
    }*/

    return await Country.findAll({ include: [{ model: Activity }] });
  }
};

const getCountriesID = async (req, res) => {
  let { id } = req.params;
  let data = await fillDB();
  try {
    let itemSelected = data.filter((el) => el.id === id);
    itemSelected.length
      ? res.status(200).json(itemSelected)
      : res.status(404).send("Recipe not found");
  } catch (err) {
    res.status(500).send(`error : ${err.message}`);
  }
};

const getCountriesByName = async (req, res) => {
  let { name } = req.query;
  let data = await fillDB();

  if (!name) {
    // case get '/' doesn't have a Query Parameter
    res.json(data).status(200);
    return;
  }

  try {
    let coincidences = await Country.findAll({
      where: {
        name: {
          [Op.substring]: [name],
        },
      },
    });

    res.json(coincidences);
  } catch (err) {
    res.send(`err : ${err.message}`);
  }
};

module.exports = { getCountriesID, getCountriesByName };
