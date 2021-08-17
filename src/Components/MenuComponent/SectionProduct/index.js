const SectionProduct = ({id, nameProduct, content}) => {
  return (
    <section className="main-product mt-3" id={id}>
      <div className="container">
        <p className="product-heading">{nameProduct}</p>
      </div>
      {
        content.map((value, index) => {
          return (
            <section className="product" key={index}  data-bs-spy="scroll">
              <div className="container">
                <div className="product-image">
                  <img src={value.photo} alt="Product" />
                </div>
                <div className="product-name">
                  <h6>{value.name}</h6>
                  <p>{value.description}</p>
                </div>
                <div className="product-price">
                  <span>{value.price}</span>
                </div>
              </div>
            </section>
          )
        })
      }
    </section>
  );
};

export default SectionProduct;
