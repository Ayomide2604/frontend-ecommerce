import { Navigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";

const PrivateRoute = ({ element: Component, ...rest }) => {
	const { token } = useAuthStore.getState();

	return token ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
