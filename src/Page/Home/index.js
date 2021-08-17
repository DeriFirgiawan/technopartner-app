import RootNavbar from '../../Components/RootNavbar';

import Logo from '../../Assets/Logo/logo technopartner.png';

const HomePage = () => {
  return (
    <main className="main-home-page">
      <RootNavbar>
        <div className="navbar-brand">
          <img src={Logo} alt="Techpartner" />
        </div>
      </RootNavbar>
      <section className="bg-banner">
        <div className="container">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title date">Good Afternoon,</h6>
              <h5 class="card-title name">Guntur Saputro,</h5>
              <div className="wrapper">
                <div className="wrapper-code"></div>
              </div>
            </div>
          </div>
        </div>        
      </section>
    </main>
  );
};

export default HomePage;
