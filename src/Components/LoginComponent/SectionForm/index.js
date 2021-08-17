const SectionForm = () => {
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input name="password" id="password" type="password" className="form-control form-control-lg" />
        </div>
      </div>
      <div className="section-action-button">
        <button type="button" className="btn btn-light">Login</button>
      </div>
    </form>
  );
}

export default SectionForm;
