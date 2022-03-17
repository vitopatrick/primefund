import React from "react";
import Slider from "react-slick";
import { testimonials } from "./testimonies";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: true,
  };

  return (
    <div className="my-4">
      <div>
        <h2 className="text-center fw-bolder fs-1"> Testimonials</h2>
        <p className="text-muted text-center">
          here what other people have to say about us
        </p>
        <Slider {...settings}>
          {testimonials.map((testimony) => (
            <div key={testimony.id}>
              <div className="bg-main w-75 p-2 rounded shadow mx-auto">
                <div className="text-center mx-auto">
                  <p>{testimony.testimony}</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h4>{testimony.author}</h4>
                  <p>{testimony.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
