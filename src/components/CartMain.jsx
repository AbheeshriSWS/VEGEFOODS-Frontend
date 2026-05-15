import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function CartMain() {

const { cartItems, removeFromCart } = useContext(CartContext);

  const [ setCartItems] = useState([]);

  const [discount] = useState(3);
  const [delivery] = useState(0);

  // ================= FETCH DATA =================
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((res) => {
        const data = res.data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setCartItems(data);
      })
      .catch((err) => {
        console.log("API Error:", err);
        setCartItems([]);
      });
  }, []);

  // ================= QUANTITY UPDATE =================
  const updateQuantity = (id, value) => {
    const qty = Number(value);

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: qty > 0 ? qty : 1 }
          : item
      )
    );
  };

  // ================= REMOVE ITEM =================
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ================= TOTAL CALCULATION =================
  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.price || 0;
    const qty = item.quantity || 1;
    return acc + price * qty;
  }, 0);

  const total = subtotal + delivery - discount;

  return (
    <section className="ftco-section ftco-cart">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ftco-animate">
            <div className="cart-list">
              <table className="table">
                <thead className="thead-primary">
                  <tr className="text-center">
                    <th></th>
                    <th></th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.length === 0 && (
                    <tr>
                      <td colSpan="6" style={{ textAlign: "center" }}>
                        Cart is empty
                      </td>
                    </tr>
                  )}

                  {cartItems.map(item => (
                    <tr key={item.id} className="text-center">
                      <td>
                        <button onClick={() => removeFromCart(item.id)}>X</button>
                      </td>
                      <td>
                        <div style={{
                          backgroundImage: `url(${item.image})`,
                          width: "80px", height: "80px", backgroundSize: "contain"
                        }} />
                      </td>
                      <td>{item.title}</td>
                      <td>${item.price}</td>
                      <td>
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                        />
                      </td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ================= SUMMARY SECTION ================= */}
        <div className="row justify-content-end">

          {/* COUPON */}
          <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
            <div className="cart-total mb-3">
              <h3>Coupon Code</h3>
              <p>Enter coupon if you have one</p>
              <input type="text" className="form-control" />
            </div>
            <p>
              <a href="#" className="btn btn-primary py-3 px-4">
                Apply Coupon
              </a>
            </p>
          </div>

          {/* SHIPPING */}
          <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
            <div className="cart-total mb-3">
              <h3>Shipping</h3>
              <p>Estimate shipping cost</p>

              <input className="form-control mb-2" placeholder="Country" />
              <input className="form-control mb-2" placeholder="State" />
              <input className="form-control" placeholder="Zip Code" />
            </div>

            <p>
              <a href="#" className="btn btn-primary py-3 px-4">
                Estimate
              </a>
            </p>
          </div>

          {/* TOTAL */}
          <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
            <div className="cart-total mb-3">
              <h3>Cart Totals</h3>

              <p className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </p>

              <p className="d-flex justify-content-between">
                <span>Delivery</span>
                <span>${delivery.toFixed(2)}</span>
              </p>

              <p className="d-flex justify-content-between">
                <span>Discount</span>
                <span>${discount.toFixed(2)}</span>
              </p>

              <hr />

              <p className="d-flex justify-content-between font-weight-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </p>
            </div>

            <p>
              <Link to="/checkout" className="btn btn-primary py-3 px-4">
                Proceed to Checkout
              </Link>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CartMain;