import CardBalance from "../CardBalance"

const SectionBanner = ({data, onModal}) => {
  return (
    <section className="bg-banner">
      <div className="container">
        <CardBalance content={data} onModal={onModal} />
      </div>        
    </section>
  );
};

export default SectionBanner;
