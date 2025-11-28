import React from "react";
import useForm from "./useForm";

export default function Register() {
  // validation rules
  const validate = (vals) => {
    let errs = {};

    if (!vals.name) errs.name = "Name is required";
    if (!vals.email) errs.email = "Email is required";
    if (!vals.password) errs.password = "Password is required";
    if (!vals.confirm) errs.confirm = "Confirm password is required";

    if (vals.password && vals.confirm && vals.password !== vals.confirm) {
      errs.confirm = "Passwords do not match";
    }

    return errs;
  };

  // when form submits successfully
  const handleRegister = (data) => {
    alert("Registration Successful!\n" + JSON.stringify(data, null, 2));
  };

  // using the custom hook
  const { values, errors, handleChange, handleSubmit } = useForm(
    { name: "", email: "", password: "", confirm: "" },
    validate,
    handleRegister
  );

  return (
    <div className="card">
      <h2>Student Register</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-row">
          <label>Name</label>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        {/* Email */}
        <div className="form-row">
          <label>Email</label>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        {/* Password */}
        <div className="form-row">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        {/* Confirm Password */}
        <div className="form-row">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm"
            value={values.confirm}
            onChange={handleChange}
          />
          {errors.confirm && <div className="error">{errors.confirm}</div>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
