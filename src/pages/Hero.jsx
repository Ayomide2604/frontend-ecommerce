import { useState } from "react";

const Hero = () => {
	const slides = [
		{
			id: 0,
			title:
				" Zero Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, velarchitecto veritatis delectus repellat modi impedit sequi.",
		},
		{
			id: 1,
			title:
				" One Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, velarchitecto veritatis delectus repellat modi impedit sequi.",
		},
		{
			id: 2,
			title:
				" Two Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, velarchitecto veritatis delectus repellat modi impedit sequi.",
		},
	];

	const [current, setCurrent] = useState(0);
	return (
		<section className="slider_section ">
			<div className="slider_bg_box">
				<img src="img/slider-bg.jpg" alt="" style={{ objectFit: "cover" }} />
			</div>
			<div id="customCarousel1" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					{slides.map((slide) => (
						<div
							key={slide.id}
							className={
								current === slide.id ? "carousel-item active" : "carousel-item"
							}
						>
							<div className="container ">
								<div className="row">
									<div className="col-md-7 col-lg-6 ">
										<div className="detail-box">
											<h1>
												<span>Sale 20% Off</span>
												<br />
												On Everything
											</h1>
											<p>{slide.title}</p>
											<div className="btn-box">
												<a href="" className="btn1">
													Shop Now
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="container">
					<ol className="carousel-indicators">
						<li
							data-target="#customCarousel1"
							data-slide-to="0"
							className={current === 0 ? "active" : ""}
							onClick={() => setCurrent(0)}
						></li>
						<li
							data-target="#customCarousel1"
							data-slide-to="1"
							className={current === 1 ? "active" : ""}
							onClick={() => setCurrent(1)}
						></li>
						<li
							data-target="#customCarousel1"
							data-slide-to="2"
							className={current === 2 ? "active" : ""}
							onClick={() => setCurrent(2)}
						></li>
					</ol>
				</div>
			</div>
		</section>
	);
};

export default Hero;
