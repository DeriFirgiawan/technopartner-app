/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import RootNavbar from '../../Components/RootNavbar';
import SectionBanner from '../../Components/HomeComponent/SectionBanner';
import SectionCarousel from '../../Components/HomeComponent/SectionCarousel';
import Modal from '../../Components/HomeComponent/Modal';
import Logo from '../../Assets/Logo/logo technopartner.png';
import { home } from '../../Config/Axios/Request/Api';

const HomePage = () => {
  const [userData] = useState(JSON.parse(localStorage.getItem('userData')));
  const [data, setData] = useState();
  const [isModal, setIsModal] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (userData) {
      fetchData();
    } else {
      history.push('/');
    }
  }, []);

  const fetchData = () => {
    const { access_token, token_type } = userData;
    home(token_type, access_token)
    .then(response => {
      const { result } = response.data;
      setData(result);
      console.log(result);
    }).catch(err => {
      if (err) {
        console.log(err.message);
      }
    });
  }

  return (
    <main className="main-home-page">
      <RootNavbar>
        <div className="navbar-brand">
          <img src={Logo} alt="Techpartner" />
        </div>
      </RootNavbar>
      <SectionBanner data={data} onModal={() => setIsModal(true)} />
      <SectionCarousel data={data ? data.banner : []} />
      {
        isModal ? (
          <Modal
            closeModal={() => setIsModal(false)}
            image={data && data.qrcode} />
        ) : null
      }
    </main>
  );
};

export default HomePage;
