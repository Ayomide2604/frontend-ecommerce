const ContactForm = () => {
	return (
		<section className="why_section layout_padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<div className="full">
							<form action="index.html">
								<fieldset>
									<div>
										<label htmlFor="name">Name:</label>
										<input
											type="text"
											placeholder="Enter your full name"
											name="name"
											required
										/>
									</div>
									<div>
										<label htmlFor="email">Email:</label>
										<input
											type="email"
											placeholder="Enter your email address"
											name="email"
											required
										/>
									</div>
									<div>
										<label htmlFor="subject">Subject:</label>
										<input
											type="text"
											placeholder="Enter subject"
											name="subject"
											required
										/>
									</div>
									<div>
										<label htmlFor="message">Message:</label>
										<textarea
											placeholder="Enter your message"
											required
										></textarea>
									</div>
									<input type="submit" value="Submit" />
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
