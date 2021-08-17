import CardBalance from "../CardBalance"

const SectionBanner = ({data}) => {
  return (
    <section className="bg-banner">
      <div className="container">
        <CardBalance content={data} />
      </div>        
    </section>
  );
};

export default SectionBanner;
