import { Outlet } from "react-router-dom";
import AdminHeader from "../components/admin/layout/AdminHeader";
import AdminFooter from "../components/admin/layout/AdminFooter";
const AdminScreen = () => {
	return (
		<>
			<AdminHeader />

			<div
				className="main-wrapper main-wrapper-1"
				style={{
					display: "flex",
					flexDirection: "column",
					flex: "1",
					minHeight: "100vh",
					backgroundColor: "#F2F2F2",
				}}
			>
				<Outlet />
			</div>

			<AdminFooter />
		</>
	);
};

export default AdminScreen;
