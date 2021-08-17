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
          <div className="card">
            <div className="card-body">
              <h6 className="card-title date">Good Afternoon,</h6>
              <h5 className="card-title name">Guntur Saputro,</h5>
              <div className="wrapper">
                <div className="wrapp">
                  <div className="wrapper-code"></div>
                </div>
                <div className="balance">
                  <div className="wrapp">
                    <h6 className="card-title">Saldo</h6>
                    <h6 className="card-title">Points</h6>
                  </div>
                  <div className="wrapp">
                    <h6 className="card-title balances">Rp 27.000</h6>
                    <h6 className="card-title point">2.500</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
      </section>
    </main>
  );
};

export default HomePage;
