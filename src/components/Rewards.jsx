import { useEffect, useState } from "react";
import axios from "axios";
import product from "../assets/images/product.jpeg";

function Rewards() {
  const [data, setData] = useState([]);

  // Fetch products
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // ================= DYNAMIC STATS =================
  const totalProducts = data?.length || 0;
  const uniqueCategories = data ? new Set(data.map((d) => d.category)).size : 0;
  const totalPartners = totalProducts * 10; // mock logic
  const totalAwards = data ? Math.floor(data.reduce((sum, item) => sum + item.price, 0)) : 0;

  // ================= DYNAMIC BACKGROUND IMAGE =================
  const bgImage = data[0] ? data[0].image : product;

  return (
    <section
      className="ftco-section ftco-counter img"
      id="section-counter"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-md-10">
            <div className="row">

              {/* HAPPY CUSTOMERS */}
              <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number">{totalProducts * 1000}</strong>
                    <span>Happy Customers</span>
                  </div>
                </div>
              </div>

              {/* BRANCHES */}
              <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number">{uniqueCategories}</strong>
                    <span>Branches</span>
                  </div>
                </div>
              </div>

              {/* PARTNERS */}
              <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number">{totalPartners}</strong>
                    <span>Partners</span>
                  </div>
                </div>
              </div>

              {/* AWARDS */}
              <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number">${totalAwards}</strong>
                    <span>Awards</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rewards;