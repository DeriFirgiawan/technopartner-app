import { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

import { apiLogin } from '../../Config/Axios/Request/Auth';

import SectionBanner from '../../Components/LoginComponent/SectionBaner';
import SectionForm from '../../Components/LoginComponent/SectionForm';

const LoginPage = () => {
  const history = useHistory();
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = event => {
    setFormLogin({...formLogin,
      [event.target.id]: event.target.value
    });
  }

  const handleClik = () => {
    console.log('Click')
    history.push('/home');
    // apiLogin(formLogin.email, formLogin.password)
    // .then(response => {
    //   console.log(response.data);
    // }).catch(err => {
    //   if (err) {
    //     console.log(err.response);
    //   }
    // });
  }
  return (
    <section className="section-login-page">
      <SectionBanner />
      <SectionForm
        onChange={handleOnChange}
        onClick={handleClik}
        valueEmail={formLogin.email}
        valuePassword={formLogin.password}
      />
    </section>
  );
};

export default LoginPage;
