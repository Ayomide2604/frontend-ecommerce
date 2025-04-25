import { Outlet } from "react-router-dom";
import AccountHeader from "../components/AccountHeader";
import AccountFooter from "../components/AccountFooter";
const AccountScreen = () => {
	return (
		<>
			<AccountHeader />
			<div id="app">
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
			</div>
			<AccountFooter />
		</>
	);
};

export default AccountScreen;
