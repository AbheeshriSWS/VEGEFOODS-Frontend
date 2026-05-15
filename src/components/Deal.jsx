import { useEffect, useState } from "react";
import axios from "axios";

function Deal() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [dealProduct, setDealProduct] = useState(null);

  // ================= TIMER =================
  function calculateTimeLeft() {
    const targetDate = new Date("2026-12-31").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  // ================= FETCH PRODUCT =================
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // pick random product as deal
        const randomIndex = Math.floor(Math.random() * res.data.length);
        setDealProduct(res.data[randomIndex]);
      })
      .catch((err) => console.log(err));
  }, []);

  // ================= TIMER INTERVAL =================
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="ftco-section img"
      style={{
        backgroundImage: dealProduct
          ? `url(${dealProduct.image})`
          : "none",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        backgroundColor: "#f8f8f8"
      }}
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-6 heading-section ftco-animate deal-of-the-day">

            <span className="subheading">Best Price For You</span>

            <h2 className="mb-4">Deal of the day</h2>

            <p>
              {dealProduct
                ? dealProduct.description.slice(0, 120)
                : "Loading deal..."}
            </p>

            <h3>
              <a href="#">
                {dealProduct ? dealProduct.title : "Loading..."}
              </a>
            </h3>

            <span className="price">
              ${dealProduct ? dealProduct.price : "0"}{" "}
              <a href="#">now discounted!</a>
            </span>

            {/* ================= TIMER ================= */}
            <div id="timer" className="d-flex mt-5">

              <div className="time">
                {timeLeft.days || 0}
                <span className="text">Days</span>
              </div>

              <div className="time pl-3">
                {timeLeft.hours || 0}
                <span className="text">Hours</span>
              </div>

              <div className="time pl-3">
                {timeLeft.minutes || 0}
                <span className="text">Minutes</span>
              </div>

              <div className="time pl-3">
                {timeLeft.seconds || 0}
                <span className="text">Seconds</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Deal;