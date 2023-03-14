export const validateFields = (
  { name, difficulty, duration, season, nation }
) => {
  let seasons = ["Spring", "Summer", "Winter", "Autumn"];
  let errors = {};
  if (!name.length || name.length > 20)
    errors.name =
      "El nombre no debe estar vacio y no debe superar los 20 caracteres";
    else errors.name = ""

  if (
    !typeof difficulty == "number" ||
    !(difficulty <= 5) ||
    !(difficulty >= 1)
  ) {
    errors.difficulty = "solo numeros de 1 a 5";
  }else errors.difficulty = ""

  if (!duration.length) errors.duration = "Duracion obligatoria";
  else errors.duration = ""

  if (!seasons.includes(season))
    errors.season = "Temporada obligatoria";
  else errors.season = ""

  if (!nation.length) errors.nation = "agrega almenos 1 pais";
  else errors.nation = ""

  return errors
};

