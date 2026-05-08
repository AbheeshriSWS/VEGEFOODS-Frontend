import product from "../assets/images/product.jpeg";
import { useState } from "react";

const products = [
  { id: 1, name: "Bell Pepper", category: "Vegetables", image: product, discount: "30%" },
  { id: 2, name: "Strawberry", category: "Fruits", image: product },
  { id: 3, name: "Green Beans", category: "Vegetables", image: product },
  { id: 4, name: "Purple Cabbage", category: "Vegetables", image: product },
  { id: 5, name: "Tomato", category: "Vegetables", image: product, discount: "30%" },
  { id: 6, name: "Broccoli", category: "Vegetables", image: product },
  { id: 7, name: "Carrots", category: "Vegetables", image: product },
  { id: 8, name: "Fruit Juice", category: "Juice", image: product },
  { id: 9, name: "Onion", category: "Dried", image: product, discount: "30%" },
  { id: 10, name: "Apple", category: "Fruits", image: product },
  { id: 11, name: "Garlic", category: "Dried", image: product },
  { id: 12, name: "Chilli", category: "Vegetables", image: product }
];

function ShopProducts() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((item) => item.category === activeTab);

  return (
    <>
      {/* ================= TABS ================= */}
      <section className="ftco-section">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-md-10 mb-5 text-center">
              <ul className="product-category">

                <li>
                  <a
                    href="#"
                    className={activeTab === "All" ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("All");
                    }}
                  >
                    All
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className={activeTab === "Vegetables" ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("Vegetables");
                    }}
                  >
                    Vegetables
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className={activeTab === "Fruits" ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("Fruits");
                    }}
                  >
                    Fruits
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className={activeTab === "Juice" ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("Juice");
                    }}
                  >
                    Juice
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className={activeTab === "Dried" ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("Dried");
                    }}
                  >
                    Dried
                  </a>
                </li>

              </ul>
            </div>
          </div>

          {/* ================= PRODUCTS ================= */}
          <div className="row">
            {filteredProducts.map((item) => (
              <div className="col-md-6 col-lg-3 ftco-animate" key={item.id}>
                <div className="product">

                  <a href="#" className="img-prod">
                    <img className="img-fluid" src={item.image} alt={item.name} />

                    {item.discount && (
                      <span className="status">{item.discount}</span>
                    )}

                    <div className="overlay"></div>
                  </a>

                  <div className="text py-3 pb-4 px-3 text-center">
                    <h3>{item.name}</h3>

                    <div className="d-flex">
                      <div className="pricing">
                        <p className="price">
                          <span>$120.00</span>
                        </p>
                      </div>
                    </div>

                    <div className="bottom-area d-flex px-3">
                      <div className="m-auto d-flex">
                        <a href="#" className="add-to-cart">
                          menu
                        </a>
                        <a href="#" className="buy-now mx-1">
                          cart
                        </a>
                        <a href="#" className="heart">
                          heart
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
        <div className="container py-4">
          <div className="row d-flex justify-content-center py-5">

            <div className="col-md-6">
              <h2 style={{ fontSize: "22px" }} className="mb-0">
                Subscribe to our Newsletter
              </h2>
              <span>
                Get e-mail updates about our latest shops and special offers
              </span>
            </div>

            <div className="col-md-6 d-flex align-items-center">
              <form className="subscribe-form">
                <div className="form-group d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email address"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="submit px-3"
                  />
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default ShopProducts;