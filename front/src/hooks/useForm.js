import { useState } from "react";
import { createActivity } from "../redux/actions";
import { useDispatch } from "react-redux";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [err, setErr] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === "nation") {
      setForm((current) => {
        if (current.nation.includes(e.target.value)) {
          return {
            ...current,
          };
        } else {
          return {
            ...current,
            [e.target.name]: [...current.nation, e.target.value],
          };
        }
      });
    } else {
      setForm((current) => {
        return {
          ...current,
          [e.target.name]: e.target.value,
        };
      });
    }
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErr(validateForm(form));
  };
  const deleteCountry = (e) => {
    let removeCountry = form.nation.filter(
      (c) => c !== e.target.textContent && c !== "Paises"
    );
    setForm((current) => {
      return {
        ...current,
        nation: removeCountry,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errs = await validateForm(form);
    if (Object.keys(errs).length === 0) {
      dispatch(createActivity(form));
    } else {
      setErr(errs);
      return;
    }
  };

  return {
    handleBlur,
    handleChange,
    handleSubmit,
    form,
    err,
    deleteCountry,
  };
};
