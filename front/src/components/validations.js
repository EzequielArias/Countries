export const validateFields = ({
  name,
  difficulty,
  duration,
  season,
  nation,
}) => {
  let seasons = ["Spring", "Summer", "Winter", "Autumn"];
  let errors = {};
  if (!name.length || name.length > 20)
    errors.name =
      "El nombre no debe estar vacio y no debe superar los 20 caracteres";
  else delete errors.name;

  if (
    // eslint-disable-next-line
    !typeof difficulty == "number" ||
    !(difficulty <= 5) ||
    !(difficulty >= 1)
  ) {
    errors.difficulty = "solo numeros de 1 a 5";
  } else delete errors.difficulty;

  if (!duration.length) errors.duration = "Duracion obligatoria";
  else delete errors.duration;

  if (!seasons.includes(season)) errors.season = "Temporada obligatoria";
  else delete errors.season;

  if (!nation.length) errors.nation = "agrega almenos 1 pais";
  else delete errors.nation;

  return errors;
};
