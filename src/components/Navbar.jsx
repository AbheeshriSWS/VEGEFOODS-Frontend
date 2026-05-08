import {Link} from "react-router-dom"

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
            <a className="navbar-brand" href="index.html">Vegefoods</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="oi oi-menu"></span> Menu
            </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/about" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</Link>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                    <a className="dropdown-item" href="shop.html">Shop</a>
                    <a className="dropdown-item" href="wishlist.html">Wishlist</a>
                    <a className="dropdown-item" href="product-single.html">Single Product</a>
                    <a className="dropdown-item" href="cart.html">Cart</a>
                    <a className="dropdown-item" href="checkout.html">Checkout</a>
                </div>
                </li>
                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                <li className="nav-item cta cta-colored"><a href="cart.html" className="nav-link"><span className="icon-shopping_cart"></span>[0]</a></li>

                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;