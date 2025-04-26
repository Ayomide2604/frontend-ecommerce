import { Navigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
const AdminRoute = ({ element: Component, ...rest }) => {
	const { token, user } = useAuthStore.getState();

	return token && user?.role === "admin" ? (
		<Component />
	) : token ? (
		<Navigate to="/unauthorized" />
	) : (
		<Navigate to="/login" />
	);
};

export default AdminRoute;
