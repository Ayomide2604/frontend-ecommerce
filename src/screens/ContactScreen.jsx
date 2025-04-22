import ContactForm from "../pages/ContactForm";

const ContactScreen = () => {
	return (
		<>
			<section className="inner_page_head">
				<div className="container_fuild">
					<div className="row">
						<div className="col-md-12">
							<div className="full">
								<h3>Contact us</h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			<ContactForm />
		</>
	);
};

export default ContactScreen;
