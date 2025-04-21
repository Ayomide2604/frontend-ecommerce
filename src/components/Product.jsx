const Product = ({ title, price, image }) => {
	return (
		<div className="col-sm-6 col-md-4 col-lg-4">
			<div className="box">
				<div className="option_container">
					<div className="options">
						<a href="" className="option1">
							{title}
						</a>
						<a href="" className="option2">
							Buy Now
						</a>
					</div>
				</div>
				<div className="img-box">
					<img src={image} alt="" />
				</div>
				<div className="detail-box">
					<h5>{title}</h5>
					<h6>${price}</h6>
				</div>
			</div>
		</div>
	);
};

export default Product;
