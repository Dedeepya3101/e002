import { useState } from "react";

export default function useForm(initialValues, validate, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // update form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // run validation function
    const validationErrors = validate(values);
    setErrors(validationErrors);

    // if no errors → call onSubmit() callback
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}
