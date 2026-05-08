import{ Routes, Route} from "react-router-dom"

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Wish from "./pages/Wishlist";
import Single from "./pages/Single";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/about" element={<About />} ></Route>
            <Route path="/shop" element={<Shop />} ></Route>
            <Route path="/wishlist" element={<Wish />} ></Route>
            <Route path="/product-single" element={<Single />} ></Route>
            <Route path="/blog" element={<Blog />} ></Route>
            <Route path="/cart" element={<Cart />} ></Route>
            <Route path="/checkout" element={<Checkout />} ></Route>
        </Routes>
    </>
  );
}

export default App;