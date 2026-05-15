import { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import "swiper/css";

import "swiper/css/pagination";

import product from "../assets/images/product.jpeg";

function Testimony() {

  const [testimonials, setTestimonials] = useState([]);

useEffect(() => {
  axios
    .get("https://fakestoreapi.com/products?limit=10")
    .then((res) => setTestimonials(res.data))
    .catch((err) => console.log(err));
}, []);

  return (
    <>

      <section className="ftco-section testimony-section">

        <div className="container">

          <div className="row justify-content-center mb-5 pb-3">

            <div className="col-md-7 heading-section text-center">

              <span className="subheading">
                Testimony
              </span>

              <h2 className="mb-4">
                Our satisfied customer says
              </h2>

              <p>
                Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia,
                there live the blind texts.
              </p>

            </div>

          </div>

          <div className="row">

            <div className="col-md-12">

              <Swiper
  spaceBetween={30}
  loop={true}
  pagination={{ clickable: true }}
  modules={[Pagination]}
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  }}
>

  {testimonials.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="testimony-wrap p-4 pb-5">

        <div
          className="user-img mb-5"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <span className="quote d-flex align-items-center justify-content-center">
            <i className="icon-quote-left"></i>
          </span>
        </div>

        <div className="text text-center">

          <p className="mb-5 pl-4 line">
            {item.description
              ? item.description.slice(0, 100)
              : "Great product and amazing quality!"}
          </p>

          <p className="name">
            {item.title.length > 20
              ? item.title.slice(0, 20)
              : item.title}
          </p>

          <span className="position">
            {item.category}
          </span>

        </div>

      </div>
    </SwiperSlide>
  ))}

</Swiper>

            </div>

          </div>

        </div>

      </section>

      <hr />

      <section className="ftco-section ftco-partner">

        <div className="container">

          <div className="row">
  {testimonials.slice(0, 5).map((item, index) => (
    <div className="col-sm ftco-animate" key={index}>
      <a href="javascript:void(0)" className="partner">
        <img
          src={item.image}
          className="img-fluid"
          alt="partner"
          style={{
            height: "80px",
            objectFit: "contain",
          }}
        />
      </a>
    </div>
  ))}
</div>

        </div>

      </section>

    </>
  );
}

export default Testimony;