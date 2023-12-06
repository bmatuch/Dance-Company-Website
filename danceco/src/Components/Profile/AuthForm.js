import React from "react";
// auth form displays fields for the user to create or login to account
const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      {!isLogin ? (
        <div>
          <div className="form-group">
            <label><b>First Name</b></label>
            <input
              type="text"
              className="form-control"
              id="first-name-input"
              value={user.first_name}
              placeholder="Jane"
              onChange={onChange}
              name="first_name"
              required
            />
            <br />
          </div>
          <div className="form-group">
            <label><b>Last Name</b></label>
            <input
              type="text"
              className="form-control"
              id="last-name-input"
              value={user.last_name}
              onChange={onChange}
              placeholder="Doe"
              name="last_name"
              required
            />
          </div><br />
          <div className="form-group">
          <label><b>Grade</b></label>
          <br />
          <input
            type="text"
            className="form-control"
            id="year-input"
            placeholder="ex. Freshman"
            value={user.year}
            onChange={onChange}
            name="year"
            required
          />
          <br />
        </div>
          <div className="form-group">
          <label><b>Dance Experience</b></label>
          <br />
          <input
            type="text-area"
            className="form-control"
            id="email-input"
            value={user.experience}
            onChange={onChange}
            placeholder="15 years at Abby Lee Dance Company"
            name="experience"
            required
          />
          </div>
          <br />{" "}
        </div>
      ) : (
        <></>
      )}
      <div>
        <div className="form-group">
          <label><b>Email</b></label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email-input"
            value={user.email}
            onChange={onChange}
            placeholder="janedoe@gmail.com"
            name="email"
            required
          />
          <br />
        </div>
        <div className="form-group">
          <label><b>Password</b></label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password-input"
            value={user.password}
            onChange={onChange}
            name="password"
            min="0"
            required
          />
        </div>
        <br />
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;