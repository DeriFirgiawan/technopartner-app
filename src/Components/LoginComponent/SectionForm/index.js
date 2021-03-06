const SectionForm = ({onChange, onClick, valueEmail, valuePassword}) => {
  return (
    <form className="section-login-form">
      <div className="wrapper">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            className="form-control form-control-lg"
            onChange={onChange}
            value={valueEmail}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            className="form-control form-control-lg"
            onChange={onChange}
            value={valuePassword}
          />
        </div>
      </div>
      <div className="section-action-button">
        <button type="button" className="btn btn-light" onClick={onClick}>Login</button>
      </div>
    </form>
  );
}

export default SectionForm;
