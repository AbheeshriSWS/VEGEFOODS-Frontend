import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../context/CartContext"; // path depends on your folder

import { useNavigate } from "react-router-dom";


function SingleCompo() {

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [quantity, setQuantity] = useState(1);

  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        setLoading(true);

        // SINGLE PRODUCT
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );

        const data = await response.json();

        setProduct(data);

        setActiveImage(data.image);

        // RELATED PRODUCTS
        const relatedResponse = await fetch(
          "https://fakestoreapi.com/products"
        );

        const relatedData = await relatedResponse.json();

        const filtered = relatedData.filter(
          (item) =>
            item.category === data.category &&
            item.id !== data.id
        );

        setRelatedProducts(filtered);

        setLoading(false);

      } catch (error) {

        console.log(error);

        setLoading(false);

      }
    };

    fetchProduct();

  }, [id]);

  if (loading) {
    return (
      <h2 className="text-center mt-5">
        Loading Product...
      </h2>
    );
  }

  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Multiple thumbnails
  const images = [
    product.image,
    product.image,
    product.image,
  ];

  return (
    <>

      {/* PRODUCT DETAILS */}

      <section className="ftco-section">

        <div className="container">

          <div className="row">

            {/* LEFT SIDE IMAGES */}

            <div className="col-lg-6 mb-5 ftco-animate">

              {/* MAIN IMAGE */}

              <div className="mb-3">

                <img
                  src={activeImage}
                  className="img-fluid rounded"
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "contain",
                  }}
                />

              </div>

              {/* THUMBNAILS */}

              <div className="d-flex gap-3 flex-wrap">

                {images.map((img, index) => (

                  <img
                    key={index}
                    src={img}
                    alt="thumbnail"
                    onClick={() => setActiveImage(img)}
                    style={{
                      width: "90px",
                      height: "90px",
                      objectFit: "contain",
                      cursor: "pointer",
                      border:
                        activeImage === img
                          ? "2px solid green"
                          : "2px solid #ddd",
                      padding: "3px",
                      borderRadius: "8px",
                    }}
                  />

                ))}

              </div>

            </div>

            {/* RIGHT SIDE DETAILS */}

            <div className="col-lg-6 product-details pl-md-5 ftco-animate">

              <h3>{product.title}</h3>

              <div className="rating d-flex">

                <p className="text-left mr-4">

                  <span className="mr-2">
                    {product.rating?.rate}
                  </span>

                  ⭐

                </p>

                <p className="text-left mr-4">

                  <span
                    className="mr-2"
                    style={{ color: "#000" }}
                  >
                    {product.rating?.count}
                    <span style={{ color: "#bbb" }}>
                      {" "}Ratings
                    </span>
                  </span>

                </p>

              </div>

              <p className="price">
                <span>${product.price}</span>
              </p>

              <p>{product.description}</p>

              <p>
                <strong>Category:</strong>{" "}
                {product.category}
              </p>

              <div className="row mt-4">

                {/* SIZE */}

                <div className="col-md-6">

                  <div className="form-group d-flex">

                    <div className="select-wrap">

                      <div className="icon">
                        <span className="ion-ios-arrow-down"></span>
                      </div>

                      <select
                        className="form-control"
                      >
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                      </select>

                    </div>

                  </div>

                </div>

                <div className="w-100"></div>

                {/* QUANTITY */}

                <div className="input-group col-md-6 d-flex mb-3">

                  <span className="input-group-btn mr-2">

                    <button
                      type="button"
                      className="quantity-left-minus btn"
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                    >
                      <i className="ion-ios-remove"></i>
                    </button>

                  </span>

                  <input
                    type="text"
                    className="form-control input-number"
                    value={quantity}
                    readOnly
                  />

                  <span className="input-group-btn ml-2">

                    <button
                      type="button"
                      className="quantity-right-plus btn"
                      onClick={() =>
                        setQuantity(quantity + 1)
                      }
                    >
                      <i className="ion-ios-add"></i>
                    </button>

                  </span>

                </div>

                <div className="w-100"></div>

                <div className="col-md-12">

                  <p style={{ color: "#000" }}>
                    {product.rating?.count} items available
                  </p>

                </div>

              </div>

              <p>

                <button
					className="btn shop-btn align-items-center d-flex justify-content-center py-3 px-5"
					onClick={() => {
						addToCart(product, quantity);
						navigate("/cart"); // go to cart page
					}}
					>
					Add to Cart
				</button>

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* RELATED PRODUCTS */}

      <section className="ftco-section">

        <div className="container">

          <div className="row justify-content-center mb-3 pb-3">

            <div className="col-md-12 heading-section text-center ftco-animate">

              <span className="subheading">
                Products
              </span>

              <h2 className="mb-4">
                Related Products
              </h2>

            </div>

          </div>

          <div className="row">

            {relatedProducts.slice(0, 4).map((item) => (

              <div
                className="col-md-6 col-lg-3 ftco-animate"
                key={item.id}
              >

                <div className="product">

                  <Link
                    to={`/product/${item.id}`}
                    className="img-prod"
                  >

                    <img
                      className="img-fluid"
                      src={item.image}
                      alt={item.title}
                      style={{
                        height: "250px",
                        objectFit: "contain",
                      }}
                    />

                    <div className="overlay"></div>

                  </Link>

                  <div className="text py-3 pb-4 px-3 text-center">

                    <h3>{item.title}</h3>

                    <div className="d-flex">

                      <div className="pricing">

                        <p className="price">

                          <span>${item.price}</span>

                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
}

export default SingleCompo;