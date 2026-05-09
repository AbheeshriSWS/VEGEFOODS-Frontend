import product from "../assets/images/product.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom"

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
                    href="javascript:void(0)"
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
                    href="javascript:void(0)"
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
                    href="javascript:void(0)"
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
                    href="javascript:void(0)"
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
                    href="javascript:void(0)"
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

                  <Link to="/product-single" className="img-prod">
                    <img className="img-fluid" src={item.image} alt={item.name} />

                    {item.discount && (
                      <span className="status">{item.discount}</span>
                    )}

                    <div className="overlay"></div>
                  </Link>

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
                        <Link to="/product-single" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                          <span><i className="ion-ios-menu"></i></span>
                        </Link>
                        <Link to="/cart" className="buy-now d-flex justify-content-center align-items-center mx-1">
                          <span><i className="ion-ios-cart"></i></span>
                        </Link>
                        <Link to="/wishlist" className="heart d-flex justify-content-center align-items-center ">
                          <span><i className="ion-ios-heart"></i></span>
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

export default ShopProducts;