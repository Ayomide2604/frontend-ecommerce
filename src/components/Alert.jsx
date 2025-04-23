import React from "react";
import { Alert as BootstrapAlert, Container } from "react-bootstrap";

const Alert = ({ message, variant = "danger", onClose }) => {
	return (
		<Container className="p-5">
			<BootstrapAlert variant={variant} onClose={onClose} dismissible>
				{message}
			</BootstrapAlert>
		</Container>
	);
};

export default Alert;
