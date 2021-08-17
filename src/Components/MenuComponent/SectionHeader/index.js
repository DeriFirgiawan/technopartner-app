import RootNavbar from "../../RootNavbar";

const SectionHeader = ({data}) => {
  return (
    <header className="menu-header">
      <h3>Menu</h3>
      <section>
        <RootNavbar>
          <div className="wrapper-menu">
            {
              data.map((value, index) => {
                return (
                  <div className="menu-link-item">
                    <span className="menu-link" key={index}>{value.category_name}</span>
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
