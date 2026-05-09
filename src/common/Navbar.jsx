import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light sticky-top bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Vegefoods</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                        {/* <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/about" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</Link>
                            <div className="dropdown-menu" aria-labelledby="dropdown04">
                                <Link className="dropdown-item" to="/shop">Shop</Link>
                                <Link className="dropdown-item" to="/wishlist">Wishlist</Link>
                                <Link className="dropdown-item" to="/product-single">Single Product</Link>
                                <Link className="dropdown-item" to="/cart">Cart</Link>
                                <Link className="dropdown-item" to="/checkout">Checkout</Link>
                            </div>
                        </li> */}
                        <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                        <li className="nav-item cta cta-colored"><Link to="/cart" className="nav-link"><span className="icon-shopping_cart"></span>[0]</Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;