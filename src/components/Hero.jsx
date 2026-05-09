import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import bg1 from "../assets/images/bg_1.jpg";
import bg2 from "../assets/images/bg_2.jpg";

function Hero() {
  return (
    <section id="home-section" className="hero">

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
      >

        <SwiperSlide>
          <div
            className="slider-item"
            style={{ backgroundImage: `url(${bg1})` }}
          >
            <div className="overlay"></div>

            <div className="container">
              <div className="slider-content">
                <h1>We serve Fresh Vegetables & Fruits</h1>

                <h2>
                  We deliver organic vegetables & fruits
                </h2>

                <a href="javascript:void(0)" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slider-item"
            style={{ backgroundImage: `url(${bg2})` }}
          >
            <div className="overlay"></div>

            <div className="container">
              <div className="slider-content">
                <h1>100% Fresh & Organic Foods</h1>

                <h2>
                  We deliver organic vegetables & fruits
                </h2>

                <a href="javascript:void(0)" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </section>
  );
}

export default Hero;