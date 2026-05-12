import{ BrowserRouter, Routes, Route} from "react-router-dom"

import { AdminRoutes } from "./admin";

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Wish from "./pages/Wishlist";
import Single from "./pages/Single";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
        <Routes>
            <Route path="/admin/*" element={<AdminRoutes />} />
            
            <Route path="/" element={<Home />} ></Route>
            <Route path="/about" element={<About />} ></Route>
            <Route path="/shop" element={<Shop />} ></Route>
            <Route path="/wishlist" element={<Wish />} ></Route>
            <Route path="/product-single" element={<Single />} ></Route>
            <Route path="/blog" element={<Blog />} ></Route>
            <Route path="/blog-single" element={<BlogSingle />} ></Route>
            <Route path="/contact" element={<Contact />} ></Route>
            <Route path="/cart" element={<Cart />} ></Route>
            <Route path="/checkout" element={<Checkout />} ></Route>
            <Route path="/signin" element={<SignIn />} ></Route>
            <Route path="/admin/login" element={<SignIn />} ></Route>
            <Route path="/signup" element={<SignUp />} ></Route>
        </Routes>
    </>
  );
}

export default App;