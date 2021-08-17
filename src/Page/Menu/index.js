/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { apiMenu } from '../../Config/Axios/Request/Api';

import SectionHeader from "../../Components/MenuComponent/SectionHeader";
import SectionProduct from "../../Components/MenuComponent/SectionProduct";

const MenuPage = () => {
  const history = useHistory();
  const [userData] = useState(JSON.parse(localStorage.getItem('userData')));
  const [listMenu, setListMenu] = useState([]);

  useEffect(() => {
    if (userData) {
      fetchData();
    } else {
      history.push('/');
    }
  }, []);

  const fetchData = () => {
    const { access_token, token_type } = userData;
    apiMenu(token_type, access_token)
    .then(response => {
      const { categories } = response.data.result;
      setListMenu(categories);
      console.log(response.data);
    }).catch(err => {
      console.log(err);
    });
  }
  return (
    <main className="main-menu">
      <SectionHeader data={listMenu} />
      {
        listMenu.map((value, index) => {
          return (
            <SectionProduct
              key={index}
              nameProduct={value.category_name}
              content={value.menu}
            />
          )
        })
      }
    </main>
  );
};

export default MenuPage;
