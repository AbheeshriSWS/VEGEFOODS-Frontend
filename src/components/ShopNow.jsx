import category from "../assets/images/product.jpeg";


function ShopNow(){
    return(
        <>
            <section className="ftco-section">
			<div className="container">
				<div className="row no-gutters ftco-services">
          <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services mb-md-0 mb-4">
              <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
            		<span className="flaticon-shipped"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Free Shipping</h3>
                <span>On order over $100</span>
              </div>
            </div>      
          </div>
          <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services mb-md-0 mb-4">
              <div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
            		<span className="flaticon-diet"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Always Fresh</h3>
                <span>Product well package</span>
              </div>
            </div>    
          </div>
          <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services mb-md-0 mb-4">
              <div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
            		<span className="flaticon-award"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Superior Quality</h3>
                <span>Quality Products</span>
              </div>
            </div>      
          </div>
          <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services mb-md-0 mb-4">
              <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
            		<span className="flaticon-customer-service"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Support</h3>
                <span>24/7 Support</span>
              </div>
            </div>      
          </div>
        </div>
			</div>
		</section>

		<section className="ftco-section ftco-category ftco-no-pt">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="row">
							<div className="col-md-6 order-md-last align-items-stretch d-flex">
								<div className="category-wrap-2 ftco-animate img align-self-stretch d-flex" style={{backgroundImage: `url(${category})`}}>
									<div className="text text-center">
										<h2>Vegetables</h2>
										<p>Protect the health of every home</p>
										<p><a href="#" className="btn btn-primary">Shop now</a></p>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="category-wrap" style={{backgroundImage: `url(${category})`}}>
									<div className="text px-3 py-1">
										<h2 className="mb-0"><a href="#">Fruits</a></h2>
									</div>
								</div>
								<div className="category-wrap" style={{backgroundImage: `url(${category})`}}>
									<div className="text px-3 py-1">
										<h2 className="mb-0"><a href="#">Vegetables</a></h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="category-wrap" style={{backgroundImage: `url(${category})`}}>
							<div className="text px-3 py-1">
								<h2 className="mb-0"><a href="#">Juices</a></h2>
							</div>		
						</div>
						<div className="category-wrap" style={{backgroundImage: `url(${category})`}}>
							<div className="text px-3 py-1">
								<h2 className="mb-0"><a href="#">Dried</a></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    );
}

export default ShopNow;