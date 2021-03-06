import { useState } from 'react';
import { useHistory } from 'react-router';

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
    apiLogin(formLogin.email, formLogin.password)
    .then(response => {
      localStorage.setItem('userData', JSON.stringify(response.data));
      history.push('/home');
    }).catch(err => {
        console.log(err.response);
    });
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
