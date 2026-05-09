import product from "../assets/images/product.jpeg";
import { Link } from "react-router-dom"

function Product() {
	return (
		<>
			<section className="ftco-section">
				<div className="container">
					<div className="row justify-content-center mb-3 pb-3">
						<div className="col-md-12 heading-section text-center ftco-animate">
							<span className="subheading">Featured Products</span>
							<h2 className="mb-4">Our Products</h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-lg-3 ftco-animate">
							<div className="product">
								<Link href="javascrip:void(0)" className="img-prod"><img className="img-fluid" src={product} alt="Colorlib Template" />
									<span className="status">30%</span>
									<div className="overlay"></div>
								</Link>
								<div className="text py-3 pb-4 px-3 text-center">
									<h3><Link href="javascript:void(0)">Bell Pepper</Link></h3>
									<div className="d-flex">
										<div className="pricing">
											<p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
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
						<div className="col-md-6 col-lg-3 ftco-animate">
							<div className="product">
								<Link href="javascript:void(0)" className="img-prod"><img className="img-fluid" src={product} alt="Colorlib Template" />
									<div className="overlay"></div>
								</Link>
								<div className="text py-3 pb-4 px-3 text-center">
									<h3><Link href="javascript:void(0)">Strawberry</Link></h3>
									<div className="d-flex">
										<div className="pricing">
											<p className="price"><span>$120.00</span></p>
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
						<div className="col-md-6 col-lg-3 ftco-animate">
							<div className="product">
								<Link href="javascript:void(0)" className="img-prod"><img className="img-fluid" src={product} alt="Colorlib Template" />
									<div className="overlay"></div>
								</Link>
								<div className="text py-3 pb-4 px-3 text-center">
									<h3><Link href="javascript:void(0)">Green Beans</Link></h3>
									<div className="d-flex">
										<div className="pricing">
											<p className="price"><span>$120.00</span></p>
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
						<div className="col-md-6 col-lg-3 ftco-animate">
							<div className="product">
								<Link href="javascript:void(0)" className="img-prod"><img className="img-fluid" src={product} alt="Colorlib Template" />
									<div className="overlay"></div>
								</Link>
								<div className="text py-3 pb-4 px-3 text-center">
									<h3><Link href="javascript:void(0)">Purple Cabbage</Link></h3>
									<div className="d-flex">
										<div className="pricing">
											<p className="price"><span>$120.00</span></p>
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


						<div className="col-md-6 col-lg-3 ftco-animate">
							<div className="product">
								<Link href="javascript:void(0)" className="img-prod"><img className="img-fluid" src={product} alt="Colorlib Template" />
									<span className="status">30%</span>
									<div className="overlay"></div>
								</Link>
								<div className="text py-3 pb-4 px-3 text-center">
									<h3><Link href="javascript:void(0)">Tomatoe</Link></h3>
									<div className="d-flex">
										<div className="pricing">
											<p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
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
						<div className="col-md-6 col-lg-3 ftco-animate">
							<div className="product">
								<Link href="javascript:void(0)" className="img-prod"><img className="img-fluid" src={product} alt="Colorlib Template" />
									<div className="overlay"></div>
								</Link>
								<div className="text py-3 pb-4 px-3 text-center">
									<h3><Link href="javascript:void(0)">Brocolli</Link></h3>
									<div className="d-flex">
										<div className="pricing">
											<p className="price"><span>$120.00</span></p>
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
						<div className="col-md-6 col-lg-3 ftco-animate">
							<div className="product">
								<Link href="javascript:void(0)" className="img-prod"><img className="img-fluid" src={product} alt="Colorlib Template" />
									<div className="overlay"></div>
								</Link>
								<div className="text py-3 pb-4 px-3 text-center">
									<h3><Link href="javascript:void(0)">Carrots</Link></h3>
									<div className="d-flex">
										<div className="pricing">
											<p className="price"><span>$120.00</span></p>
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
						<div className="col-md-6 col-lg-3 ftco-animate">
							<div className="product">
								<Link href="javascrip:void(0)" className="img-prod"><img className="img-fluid" src={product} alt="Colorlib Template" />
									<div className="overlay"></div>
								</Link>
								<div className="text py-3 pb-4 px-3 text-center">
									<h3><Link href="javascript:void(0)">Fruit Juice</Link></h3>
									<div className="d-flex">
										<div className="pricing">
											<p className="price"><span>$120.00</span></p>
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
					</div>
				</div>
			</section>
		</>
	);
}

export default Product;

