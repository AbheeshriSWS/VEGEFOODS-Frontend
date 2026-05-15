import { useEffect, useState } from "react";
import axios from "axios";

function ShopNow() {

	const [products, setProducts] = useState([]);

useEffect(() => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err));
}, []);

	return (
		<>
			<section className="ftco-section">
				<div className="container">
					<div className="row no-gutters ftco-services">
						<div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
							<div className="media block-6 services mb-md-0 mb-4">
								<div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
									<span className="flaticon-shipped"></span>
								</div>
								<div className="media-body">
									<h3 className="heading">Free Shipping</h3>
									<span>On order over $100</span>
								</div>	
							</div>
						</div>
						<div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
							<div className="media 	lock-6 services mb-md-0 mb-4">
								<div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
									<span className="flaticon-diet"></span>
								</div>
								<div className="media-body">
									<h3 className="heading">Always Fresh</h3>
									<span>Product well package</span>
								</div>
							</div>
						</div>
						<div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
							<div className="media block-6 services mb-md-0 mb-4">
								<div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
									<span className="flaticon-award"></span>
								</div>
								<div className="media-body">
									<h3 className="heading">Superior Quality</h3>
									<span>Quality Products</span>
								</div>
							</div>
						</div>
						<div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
							<div className="media block-6 services mb-md-0 mb-4">
								<div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
									<span className="flaticon-customer-service"></span>
								</div>
								<div className="media-body">
									<h3 className="heading">Support</h3>
									<span>24/7 Support</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="ftco-section ftco-category ftco-no-pt">
  <div className="container">
    <div className="row">

      {/* LEFT SIDE BIG AREA */}
      <div className="col-md-8">
        <div className="row">

          {/* PRODUCT 1 (BIG CARD) */}
          <div className="col-md-6 order-md-last align-items-stretch d-flex">
            {products[0] && (
              <div
                className="category-wrap-2 ftco-animate img align-self-stretch d-flex"
                style={{
                  backgroundImage: `url(${products[0].image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundColor: "#f8f8f8"
                }}
              >
                <div className="text text-center">
                  <h2>{products[0].category}</h2>
                  <p>{products[0].title.slice(0, 45)}</p>
                  <p>
                    <a href="javascript:void(0)" className="btn shop-btn">
                      Shop now
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT OF BIG CARD */}
          <div className="col-md-6">

            {/* PRODUCT 2 */}
            {products[1] && (
              <div
                className="category-wrap"
                style={{
                  backgroundImage: `url(${products[1].image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundColor: "#f8f8f8"
                }}
              >
                <div className="text px-3 py-1">
                  <h2 className="mb-0">{products[1].category}</h2>
                </div>
              </div>
            )}

            {/* PRODUCT 3 */}
            {products[2] && (
              <div
                className="category-wrap"
                style={{
                  backgroundImage: `url(${products[2].image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundColor: "#f8f8f8"
                }}
              >
                <div className="text px-3 py-1">
                  <h2 className="mb-0">{products[2].category}</h2>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="col-md-4">

        {/* PRODUCT 4 */}
        {products[3] && (
          <div
            className="category-wrap"
            style={{
              backgroundImage: `url(${products[3].image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "#f8f8f8"
            }}
          >
            <div className="text px-3 py-1">
              <h2 className="mb-0">{products[3].category}</h2>
            </div>
          </div>
        )}

        {/* PRODUCT 5 */}
        {products[4] && (
          <div
            className="category-wrap"
            style={{
              backgroundImage: `url(${products[4].image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "#f8f8f8"
            }}
          >
            <div className="text px-3 py-1">
              <h2 className="mb-0">{products[4].category}</h2>
            </div>
          </div>
        )}

      </div>

    </div>
  </div>
</section>
		</>
	);
}

export default ShopNow;