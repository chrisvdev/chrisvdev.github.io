import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";

const Testimonials = (props) => {
  const { data } = props;
  return (
    <section>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination,Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={`testimonial_${index}`} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
