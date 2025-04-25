import { useNavigate } from "react-router-dom";
const BackButton = () => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1); // Go back to the previous page
	};
	return (
		<button onClick={handleBack} className="btn btn-secondary px-4 py-2">
			← Back
		</button>
	);
};

export default BackButton;
