import { useState } from "react";

export const useFormValidation = (initialValues, validate) => {

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    const { name, value } = e.target;

    const newValues = {
      ...values,
      [name]: value
    };

    setValues(newValues);

    const validationErrors = validate(newValues);
    setErrors(validationErrors);

  };

  const handleSubmit = (e, callback) => {

    e.preventDefault();

    const validationErrors = validate(values);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
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