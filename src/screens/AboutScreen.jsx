import NewArrivals from "../pages/NewArrivals";
import WhySection from "../pages/ShopWithUs";

const AboutScreen = () => {
	return (
		<>
			<section className="inner_page_head">
				<div className="container_fuild">
					<div className="row">
						<div className="col-md-12">
							<div className="full">
								<h3>About us</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
			<WhySection />
			<NewArrivals />
		</>
	);
};

export default AboutScreen;
