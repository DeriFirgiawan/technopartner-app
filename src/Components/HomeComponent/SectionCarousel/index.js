import React from "react";
import { Icon } from '@iconify/react';
import RBCarousel from 'react-bootstrap-carousel';

const SectionCarousel = ({data}) => {
  return (
    <RBCarousel
      animation={true}
      autoPlay={true}
      slideshowSpeed={2000}
      defaultActiveIndex={0}
      leftIcon={false}
      rightIcon={false}
      version={4}
    >
      {
        data.map((value, key) => {
          return (
            <img src={value} key={key} className="d-block w-100" alt="TechPartner" />
          )
        })
      }
    </RBCarousel>
    // <React.Fragment>
    //   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-ride="carousel" data-interval={2000}>
    //     <div className="carousel-inner">
    //       {
    //         data.map((value, key) => {
    //           return (
    //             <div className={`carousel-item active`} key={key}>
    //               <img src={value} className="d-block w-100" alt="TechPartner" />
    //             </div>
    //           )
    //         })
    //       }
    //     </div>
    //   </div>
    //   <div className="wrapper-indicator">
    //     <div className="carousel-indicators">
    //       {
    //         data.map((value, index) => {
    //           return (
    //             <span className="dotted" key={index} />
    //           )
    //         })
    //       }
    //     </div>
    //     <div className="more-content">
    //         <h6>View all</h6>
    //       <div>
    //         <Icon icon="entypo:chevron-small-right" fontSize={24} />
    //       </div>
    //     </div>
    //   </div>
    // </React.Fragment>
  );
};

export default SectionCarousel;
