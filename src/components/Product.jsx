import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Product() {

  const [activeTab, setActiveTab] = useState("All");

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  // FETCH PRODUCTS
  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        const data = await response.json();

        const transformedProducts = data.map((item) => ({
          id: item.id,
          name: item.title,
          category: item.category,
          image: item.image,
          price: item.price,
        }));

        setProducts(transformedProducts);

        setLoading(false);

      } catch (error) {

        console.error(
          "Error fetching products:",
          error
        );

        setLoading(false);

      }
    };

    fetchProducts();

  }, []);

  // FILTER PRODUCTS
  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter(
          (item) => item.category === activeTab
        );

  // LOADING
  if (loading) {
    return (
      <p className="text-center">
        Loading products...
      </p>
    );
  }

  return (
    <>

      {/* HEADING */}

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-md-12 heading-section text-center ftco-animate">

            <span className="subheading">
              Featured Products
            </span>

            <h2 className="mb-4">
              Our Products
            </h2>

            <p>
              Browse our latest collection
            </p>

          </div>

        </div>

      </div>

      {/* PRODUCTS */}

      <section className="ftco-section">

        <div className="container">

          {/* CATEGORY FILTERS */}

          <div className="row justify-content-center">

            <div className="col-md-10 mb-5 text-center">

              <ul className="product-category">

                {[
                  "All",
                  "men's clothing",
                  "women's clothing",
                  "electronics",
                  "jewelery",
                ].map((cat) => (

                  <li key={cat}>

                    <a
                      href="#"
                      className={
                        activeTab === cat
                          ? "active"
                          : ""
                      }
                      onClick={(e) => {

                        e.preventDefault();

                        setActiveTab(cat);

                      }}
                    >
                      {cat}
                    </a>

                  </li>

                ))}

              </ul>

            </div>

          </div>

          {/* PRODUCT CARDS */}

          <div className="row">

            {filteredProducts.map((item) => (

              <div
                className="col-md-6 col-lg-3 ftco-animate mb-4"
                key={item.id}
              >

                <div className="product">

                  {/* IMAGE */}

                  <Link
                    to={`/product/${item.id}`}
                    className="img-prod"
                  >

                    <img
                      className="img-fluid"
                      src={item.image}
                      alt={item.name}
                      style={{
                        height: "250px",
                        objectFit: "contain",
                      }}
                    />

                    <div className="overlay"></div>

                  </Link>

                  {/* TEXT */}

                  <div className="text py-3 pb-4 px-3 text-center">

                    <h3
                      style={{
                        height: "50px",
                        overflow: "hidden",
                      }}
                    >
                      {item.name}
                    </h3>

                    <div className="d-flex justify-content-center">

                      <div className="pricing">

                        <p className="price">

                          <span>
                            ${item.price.toFixed(2)}
                          </span>

                        </p>

                      </div>

                    </div>

                    {/* BUTTONS */}

                    <div className="bottom-area d-flex px-3">

                      <div className="m-auto d-flex">

                        <Link
                          to={`/product/${item.id}`}
                          className="add-to-cart d-flex justify-content-center align-items-center text-center"
                        >
                          <span>
                            <i className="ion-ios-menu"></i>
                          </span>
                        </Link>

                        <Link
                          to="/cart"
                          className="buy-now d-flex justify-content-center align-items-center mx-1"
                        >
                          <span>
                            <i className="ion-ios-cart"></i>
                          </span>
                        </Link>

                        <Link
                          to="/wishlist"
                          className="heart d-flex justify-content-center align-items-center"
                        >
                          <span>
                            <i className="ion-ios-heart"></i>
                          </span>
                        </Link>

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

export default Product;