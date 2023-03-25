import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions/index";
import { validateFields } from "../../components/validations";
import { useForm } from "../../hooks/useForm";
import "./CreateForm.css";

const CreateForm = () => {
  const initialForm = {
    name: "",
    difficulty: 0,
    duration: "",
    season: "",
    nation: [],
  };

  const dispatch = useDispatch();
  const seasons = ["Spring", "Summer", "Winter", "Autumn"];
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  const countryOpt = useSelector((state) => state.countries);

  const { handleChange, handleBlur, handleSubmit, form, err,deleteCountry } = useForm(
    initialForm,
    validateFields
  );


  return (
    <>
      <div className="body-container">
        <div className="container">
          <h1>Formulario baby</h1>
          <form>
            <div className="user-details">
              <div className="input-box">
                <label>Nombre : </label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <span>{err.name ? err.name : ""}</span>
              </div>

              <div className="input-box">
                <label>Dificultad</label>
                <input
                  name="difficulty"
                  type="number"
                  value={form.difficulty}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <span>{err.difficulty ? err.difficulty : ""}</span>
              </div>

              <div className="input-box">
                <label>Duracion</label>
                <input
                  name="duration"
                  type="text"
                  value={form.duration}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <span>{err.duration ? err.duration : ""}</span>
              </div>

              <div className="input-box">
                <label>Temporada</label>
                <select
                  name="season"
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  Temporada
                  {seasons.map((el) => {
                    return (
                      <option key={el} value={el}>
                        {el}
                      </option>
                    );
                  })}
                </select>
                <span>{err.season ? err.season : ""}</span>
              </div>

              <div className="input-box">
                <label>Paises</label>
                <select
                  name="nation"
                  value={form.nation}
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <option defaultValue={""}>Paises</option>
                  {countryOpt.map((c) => {
                    return (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    );
                  })}
                </select>
                <span>{err.nation ? err.nation : ""}</span>
                {
                form.nation.length > 0 ? 
                (
                  <div className="countries_contain">{form.nation.map(c => {
                    if(c === 'Paises') return ''
                    return (
                      <div className="countries-div" onClick={deleteCountry}>{c}</div>
                    )
                  })}</div>
                ) : 
                ""
                }
              </div>
              <div className="form-button">
                <button onClick={handleSubmit}>Crear Actividad</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateForm;

/*-  Nombre.
-  Dificultad.
-  Duración.
-  Temporada.
-  Posibilidad de seleccionar/agregar varios países en simultáneo.
-  Botón para crear la actividad turística.*/
