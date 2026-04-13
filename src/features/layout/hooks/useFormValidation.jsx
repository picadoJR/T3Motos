import { useState } from "react";

export const useFormValidation = (initialValues, validate) => {

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // Compatibilidad con inputs nativos y TextField de MUI
    const name = e.target.name || e.target.id;
    const value = e.target.value;

    if (!name) {
      console.warn("Input sin atributo name o id:", e.target);
      return;
    }

    const newValues = {
      ...values,
      [name]: value
    };

    setValues(newValues);

    if (validate) {
      const validationErrors = validate(newValues);
      setErrors(validationErrors);
    }
  };

  const handleSubmit = (e, callback) => {
    e.preventDefault();

    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0 && callback) {
        callback();
      }
    } else if (callback) {
      callback();
    }
  };


  return {
    values,
    errors,
    handleChange,
    handleSubmit
  };

};