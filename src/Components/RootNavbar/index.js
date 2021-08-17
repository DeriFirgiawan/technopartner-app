const RootNavbar = ({children, position = ''}) => {
  return (
    <nav className={`navbar navbar-light ${position}`}>
      <div className="container">
        {children}
      </div>
    </nav>
  );
}

export default RootNavbar;
