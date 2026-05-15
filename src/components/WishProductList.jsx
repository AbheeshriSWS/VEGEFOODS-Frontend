import { useEffect, useState } from "react";
import axios from "axios";

function WishProductList() {
  const [wishlist, setWishlist] = useState([]);

  // ================= FETCH PRODUCTS =================
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=6") // fetch 6 sample products
      .then((res) => {
        const data = res.data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setWishlist(data);
      })
      .catch((err) => {
        console.log("API Error:", err);
        setWishlist([]);
      });
  }, []);

  // ================= UPDATE QUANTITY =================
  const updateQuantity = (id, value) => {
    const qty = Number(value);
    setWishlist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty > 0 ? qty : 1 } : item
      )
    );
  };

  // ================= REMOVE ITEM =================
  const removeItem = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="ftco-section ftco-cart">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ftco-animate">
            <div className="cart-list">
              <table className="table">
                <thead className="thead-primary">
                  <tr className="text-center">
                    <th>&nbsp;</th>
                    <th>Product List</th>
                    <th>&nbsp;</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.length === 0 && (
                    <tr>
                      <td colSpan="6" style={{ padding: "20px", textAlign: "center" }}>
                        No products in wishlist
                      </td>
                    </tr>
                  )}

                  {wishlist.map((item) => (
                    <tr className="text-center" key={item.id}>
                      {/* REMOVE */}
                      <td className="product-remove">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            removeItem(item.id);
                          }}
                        >
                          <span className="ion-ios-close"></span>
                        </a>
                      </td>

                      {/* IMAGE */}
                      <td className="image-prod">
                        <div
                          className="img"
                          style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height: "80px",
                            width: "80px",
                            backgroundColor: "#f8f8f8",
                          }}
                        />
                      </td>

                      {/* PRODUCT NAME */}
                      <td className="product-name">
                        <h3 style={{ fontSize: "14px" }}>{item.title}</h3>
                        <p style={{ fontSize: "12px" }}>
                          {(item.description || "").slice(0, 60)}...
                        </p>
                      </td>

                      {/* PRICE */}
                      <td className="price">${item.price.toFixed(2)}</td>

                      {/* QUANTITY */}
                      <td className="quantity">
                        <input
                          type="number"
                          className="form-control input-number"
                          value={item.quantity}
                          min="1"
                          onChange={(e) => updateQuantity(item.id, e.target.value)}
                        />
                      </td>

                      {/* TOTAL */}
                      <td className="total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WishProductList;