import React from 'react';
import useForm from './useForm';

export default function Login() {
  const validate = (vals) => {
    let errs = {};
    if (!vals.email) errs.email = "Email required";
    if (!vals.password) errs.password = "Password required";
    return errs;
  };

  const handleLogin = (data) => {
    alert("Login Successful: " + JSON.stringify(data));
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    { email: "", password: "" },
    validate,
    handleLogin
  );

  return (
    <div className="card">
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Email</label>
          <input name="email" value={values.email} onChange={handleChange} />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-row">
          <label>Password</label>
          <input type="password" name="password" value={values.password} onChange={handleChange} />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
