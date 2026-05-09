import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import "swiper/css";

import "swiper/css/pagination";

import product from "../assets/images/product.jpeg";

function Testimony() {

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
                  0: {
                    slidesPerView: 1,
                  },

                  768: {
                    slidesPerView: 2,
                  },

                  992: {
                    slidesPerView: 3,
                  },
                }}
              >

                {/* Slide 1 */}

                <SwiperSlide>

                  <div className="testimony-wrap p-4 pb-5">

                    <div
                      className="user-img mb-5"
                      style={{
                        backgroundImage: `url(${product})`,
                      }}
                    >

                      <span className="quote d-flex align-items-center justify-content-center">

                        <i className="icon-quote-left"></i>

                      </span>

                    </div>

                    <div className="text text-center">

                      <p className="mb-5 pl-4 line">
                        Far far away, behind the word mountains,
                        far from the countries Vokalia and Consonantia,
                        there live the blind texts.
                      </p>

                      <p className="name">
                        Garreth Smith
                      </p>

                      <span className="position">
                        Marketing Manager
                      </span>

                    </div>

                  </div>

                </SwiperSlide>

                {/* Slide 2 */}

                <SwiperSlide>

                  <div className="testimony-wrap p-4 pb-5">

                    <div
                      className="user-img mb-5"
                      style={{
                        backgroundImage: `url(${product})`,
                      }}
                    >

                      <span className="quote d-flex align-items-center justify-content-center">

                        <i className="icon-quote-left"></i>

                      </span>

                    </div>

                    <div className="text text-center">

                      <p className="mb-5 pl-4 line">
                        Far far away, behind the word mountains,
                        far from the countries Vokalia and Consonantia,
                        there live the blind texts.
                      </p>

                      <p className="name">
                        Garreth Smith
                      </p>

                      <span className="position">
                        Interface Designer
                      </span>

                    </div>

                  </div>

                </SwiperSlide>

                {/* Slide 3 */}

                <SwiperSlide>

                  <div className="testimony-wrap p-4 pb-5">

                    <div
                      className="user-img mb-5"
                      style={{
                        backgroundImage: `url(${product})`,
                      }}
                    >

                      <span className="quote d-flex align-items-center justify-content-center">

                        <i className="icon-quote-left"></i>

                      </span>

                    </div>

                    <div className="text text-center">

                      <p className="mb-5 pl-4 line">
                        Far far away, behind the word mountains,
                        far from the countries Vokalia and Consonantia,
                        there live the blind texts.
                      </p>

                      <p className="name">
                        Garreth Smith
                      </p>

                      <span className="position">
                        UI Designer
                      </span>

                    </div>

                  </div>

                </SwiperSlide>

                {/* Slide 4 */}

                <SwiperSlide>

                  <div className="testimony-wrap p-4 pb-5">

                    <div
                      className="user-img mb-5"
                      style={{
                        backgroundImage: `url(${product})`,
                      }}
                    >

                      <span className="quote d-flex align-items-center justify-content-center">

                        <i className="icon-quote-left"></i>

                      </span>

                    </div>

                    <div className="text text-center">

                      <p className="mb-5 pl-4 line">
                        Far far away, behind the word mountains,
                        far from the countries Vokalia and Consonantia,
                        there live the blind texts.
                      </p>

                      <p className="name">
                        Garreth Smith
                      </p>

                      <span className="position">
                        Web Developer
                      </span>

                    </div>

                  </div>

                </SwiperSlide>

                {/* Slide 5 */}

                <SwiperSlide>

                  <div className="testimony-wrap p-4 pb-5">

                    <div
                      className="user-img mb-5"
                      style={{
                        backgroundImage: `url(${product})`,
                      }}
                    >

                      <span className="quote d-flex align-items-center justify-content-center">

                        <i className="icon-quote-left"></i>

                      </span>

                    </div>

                    <div className="text text-center">

                      <p className="mb-5 pl-4 line">
                        Far far away, behind the word mountains,
                        far from the countries Vokalia and Consonantia,
                        there live the blind texts.
                      </p>

                      <p className="name">
                        Garreth Smith
                      </p>

                      <span className="position">
                        System Analyst
                      </span>

                    </div>

                  </div>

                </SwiperSlide>

              </Swiper>

            </div>

          </div>

        </div>

      </section>

      <hr />

      <section className="ftco-section ftco-partner">

        <div className="container">

          <div className="row">

            <div className="col-sm ftco-animate">
              <a href="javascript:void(0)" className="partner">
                <img
                  src={product}
                  className="img-fluid"
                  alt="partner"
                />
              </a>
            </div>

            <div className="col-sm ftco-animate">
              <a href="javascript:void(0)" className="partner">
                <img
                  src={product}
                  className="img-fluid"
                  alt="partner"
                />
              </a>
            </div>

            <div className="col-sm ftco-animate">
              <a href="javascript:void(0)" className="partner">
                <img
                  src={product}
                  className="img-fluid"
                  alt="partner"
                />
              </a>
            </div>

            <div className="col-sm ftco-animate">
              <a href="javascript:void(0)" className="partner">
                <img
                  src={product}
                  className="img-fluid"
                  alt="partner"
                />
              </a>
            </div>

            <div className="col-sm ftco-animate">
              <a href="javascript:void(0)" className="partner">
                <img
                  src={product}
                  className="img-fluid"
                  alt="partner"
                />
              </a>
            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default Testimony;