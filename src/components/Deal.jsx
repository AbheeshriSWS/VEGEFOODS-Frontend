import { useEffect, useState } from "react";
import product from "../assets/images/product.jpeg";

function Deal() {

  const calculateTimeLeft = () => {
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
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="ftco-section img"
      style={{ backgroundImage: `url(${product})` }}
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-6 heading-section ftco-animate deal-of-the-day">
            <span className="subheading">Best Price For You</span>

            <h2 className="mb-4">Deal of the day</h2>

            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>

            <h3>
              <a href="#">Spinach</a>
            </h3>

            <span className="price">
              $10 <a href="#">now $5 only</a>
            </span>

            <div id="timer" className="d-flex mt-5">
              <div className="time">
                {timeLeft.days} 
                <span className="text">Days</span>
              </div>
              

              <div className="time pl-3">
                {timeLeft.hours} 
                <span className="text">Hours</span>
              </div>
              

              <div className="time pl-3">
                {timeLeft.minutes} 
                <span className="text">Minutes</span>
              </div>
              

              <div className="time pl-3">
                {timeLeft.seconds} 
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