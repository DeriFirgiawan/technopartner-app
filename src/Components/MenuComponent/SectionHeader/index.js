import React, {useState} from "react";
import { HashLink as Link } from 'react-router-hash-link';
import RootNavbar from "../../RootNavbar";

const SectionHeader = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = index => {
    console.log(index);
    setActiveIndex(index);
  }
  return (
    <header className="menu-header fixed-top">
      <h3>Menu</h3>
      <section>
        <RootNavbar>
          <div className="wrapper-menu">
            {
              data.map((value, index) => {
                return (
                  <div className={`menu-link-item ${activeIndex === index ? 'active' : ''}`}>
                    <Link onClick={() => handleClick(index)} to={`/menu#${index}`} className="menu-link" key={index}>{value.category_name}</Link>
                  </div>
                )
              })
            }
          </div>
        </RootNavbar>
      </section>
    </header>
  );
};

export default SectionHeader;
