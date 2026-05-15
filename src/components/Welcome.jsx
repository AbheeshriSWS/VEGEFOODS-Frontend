// import product from "../assets/images/product.jpeg";
// import { Link } from "react-router-dom"

// function Welcome(){
//     return(
//         <>
//             <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
// 			<div className="container">
// 				<div className="row">
// 					<div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${product})`}}>
// 						<a href="https://vimeo.com/45830194" className="icon popup-vimeo d-flex justify-content-center align-items-center">
// 							<span className="icon-play"></span>
// 						</a>
// 					</div>
// 					<div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
// 	          <div className="heading-section-bold mb-4 mt-md-5">
// 	          	<div className="ml-md-0">
// 		            <h2 className="mb-4">Welcome to Vegefoods an eCommerce website</h2>
// 	            </div>
// 	          </div>
// 	          <div className="pb-md-5">
// 	          	<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
// 							<p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
// 							<p><Link to="/shop" className="btn btn-primary">Shop now</Link></p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
//         </>
//     );
// }

// export default Welcome;


import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Welcome() {
  const [productData, setProductData] = useState(null);

  // ================= FETCH FEATURED PRODUCT =================
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // pick random product as featured
        const random =
          res.data[Math.floor(Math.random() * res.data.length)];
        setProductData(random);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
        <div className="container">
          <div className="row">

            {/* ================= LEFT IMAGE SECTION ================= */}
            <div
              className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: productData
                  ? `url(${productData.image})`
                  : "none",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "#f8f8f8"
              }}
            >
              <a
                href="https://vimeo.com/45830194"
                className="icon popup-vimeo d-flex justify-content-center align-items-center"
              >
                <span className="icon-play"></span>
              </a>
            </div>

            {/* ================= RIGHT TEXT SECTION ================= */}
            <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">

              <div className="heading-section-bold mb-4 mt-md-5">
                <div className="ml-md-0">

                  <h2 className="mb-4">
                    {productData
                      ? productData.title
                      : "Welcome to Vegefoods an eCommerce website"}
                  </h2>

                </div>
              </div>

              <div className="pb-md-5">

                <p>
                  {productData
                    ? productData.description.slice(0, 200)
                    : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia..."}
                </p>

                <p>
                  {productData
                    ? `Category: ${productData.category}`
                    : "But nothing the copy said could convince her..."}
                </p>

                <p>
                  <Link to="/shop" className="btn btn-primary">
                    Shop now
                  </Link>
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Welcome;