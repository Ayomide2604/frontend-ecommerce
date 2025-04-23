import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { LuMaximize } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

import AccountSidebar from "./AccountSidebar";
const AccountHeader = () => {
	const [isMini, setIsMini] = useState(false);

	useEffect(() => {
		if (isMini) {
			document.body.classList.add("sidebar-mini");
		} else {
			document.body.classList.remove("sidebar-mini");
		}
	}, [isMini]);

	return (
		<>
			<div className="navbar-bg " />
			<nav
				className="navbar navbar-expand-lg main-navbar sticky "
				style={{
					position: "sticky",
					top: 0,
					zIndex: 1000,
					backgroundColor: "white",
				}}
			>
				<div
					className="form-inline mr-auto"
					style={{
						display: "flex",
						alignItems: "center", // this vertically centers items
						gap: "1rem", // optional spacing between items
					}}
				>
					<ul
						className="navbar-nav d-flex align-items-center mb-0"
						style={{
							display: "flex",
							alignItems: "center",
							gap: "1rem",
							listStyle: "none",
						}}
					>
						<li>
							<button
								href="#"
								data-toggle="sidebar"
								className="nav-link nav-link-lg collapse-btn"
								onClick={() => setIsMini((prev) => !prev)}
							>
								<AiOutlineMenu color="#555556" size={25} />
							</button>
						</li>
						<li>
							<a href="#" className="nav-link nav-link-lg fullscreen-btn">
								<LuMaximize color="#555556" size={25} />
							</a>
						</li>
						<li>
							<form className="form-inline mr-auto">
								<div className="search-element d-flex">
									<input
										className="form-control"
										type="search"
										placeholder="Search"
										aria-label="Search"
										style={{
											backgroundColor: "#F0F3FF",
											paddingRight: "2.5rem",
											width: "100%",
										}}
									/>
									<FaSearch
										style={{
											position: "relative",
											right: "20px",
											top: "50%",
											transform: "translateY(-50%)",
											color: "#555",
											cursor: "pointer",
											display: "flex",
											alignSelf: "center",
										}}
									/>
								</div>
							</form>
						</li>
					</ul>
				</div>

				<ul className="navbar-nav navbar-right">
					{/* Messages */}
					<li className="dropdown dropdown-list-toggle">
						<a
							href="#"
							data-toggle="dropdown"
							className="nav-link nav-link-lg message-toggle"
						>
							<MdOutlineEmail size={25} color="#000" />
							<span className="badge headerBadge1">6 </span>{" "}
						</a>
						<div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
							<div className="dropdown-header">
								Messages
								<div className="float-right">
									<a href="#">Mark All As Read</a>
								</div>
							</div>
							<div className="dropdown-list-content dropdown-list-message">
								<a href="#" className="dropdown-item">
									{" "}
									<span
										className="dropdown-item-avatar
											text-white"
									>
										{" "}
										<img
											alt="image"
											src="assets/img/users/user-1.png"
											className="rounded-circle"
										/>
									</span>{" "}
									<span className="dropdown-item-desc">
										{" "}
										<span className="message-user">John Deo</span>
										<span className="time messege-text">
											Please check your mail !!
										</span>
										<span className="time">2 Min Ago</span>
									</span>
								</a>{" "}
								<a href="#" className="dropdown-item">
									{" "}
									<span className="dropdown-item-avatar text-white">
										<img
											alt="image"
											src="assets/img/users/user-2.png"
											className="rounded-circle"
										/>
									</span>{" "}
									<span className="dropdown-item-desc">
										{" "}
										<span className="message-user">Sarah Smith</span>{" "}
										<span className="time messege-text">
											Request for leave application
										</span>
										<span className="time">5 Min Ago</span>
									</span>
								</a>{" "}
								<a href="#" className="dropdown-item">
									{" "}
									<span className="dropdown-item-avatar text-white">
										<img
											alt="image"
											src="assets/img/users/user-5.png"
											className="rounded-circle"
										/>
									</span>{" "}
									<span className="dropdown-item-desc">
										{" "}
										<span className="message-user">Jacob Ryan</span>{" "}
										<span className="time messege-text">
											Your payment invoice is generated.
										</span>{" "}
										<span className="time">12 Min Ago</span>
									</span>
								</a>{" "}
								<a href="#" className="dropdown-item">
									{" "}
									<span className="dropdown-item-avatar text-white">
										<img
											alt="image"
											src="assets/img/users/user-4.png"
											className="rounded-circle"
										/>
									</span>{" "}
									<span className="dropdown-item-desc">
										{" "}
										<span className="message-user">Lina Smith</span>{" "}
										<span className="time messege-text">
											hii John, I have upload doc related to task.
										</span>{" "}
										<span className="time">30 Min Ago</span>
									</span>
								</a>{" "}
								<a href="#" className="dropdown-item">
									{" "}
									<span className="dropdown-item-avatar text-white">
										<img
											alt="image"
											src="assets/img/users/user-3.png"
											className="rounded-circle"
										/>
									</span>{" "}
									<span className="dropdown-item-desc">
										{" "}
										<span className="message-user">Jalpa Joshi</span>{" "}
										<span className="time messege-text">
											Please do as specify. Let me know if you have any query.
										</span>{" "}
										<span className="time">1 Days Ago</span>
									</span>
								</a>{" "}
								<a href="#" className="dropdown-item">
									{" "}
									<span className="dropdown-item-avatar text-white">
										<img
											alt="image"
											src="assets/img/users/user-2.png"
											className="rounded-circle"
										/>
									</span>{" "}
									<span className="dropdown-item-desc">
										{" "}
										<span className="message-user">Sarah Smith</span>{" "}
										<span className="time messege-text">
											Client Requirements
										</span>
										<span className="time">2 Days Ago</span>
									</span>
								</a>
							</div>
							<div className="dropdown-footer text-center">
								<a href="#">
									View All <i className="fas fa-chevron-right" />
								</a>
							</div>
						</div>
					</li>
					{/* Notifications */}
					<li className="dropdown dropdown-list-toggle">
						<a
							href="#"
							data-toggle="dropdown"
							className="nav-link notification-toggle nav-link-lg"
						>
							<IoMdNotificationsOutline size={25} color="#000" />
						</a>
						<div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
							<div className="dropdown-header">
								Notifications
								<div className="float-right">
									<a href="#">Mark All As Read</a>
								</div>
							</div>
							<div className="dropdown-list-content dropdown-list-icons">
								<a href="#" className="dropdown-item dropdown-item-unread">
									{" "}
									<span className="dropdown-item-icon bg-primary text-white">
										{" "}
										<i
											className="fas
												fa-code"
										/>
									</span>{" "}
									<span className="dropdown-item-desc">
										{" "}
										Template update is available now!{" "}
										<span className="time">2 Min Ago</span>
									</span>
								</a>{" "}
								<a href="#" className="dropdown-item">
									{" "}
									<span className="dropdown-item-icon bg-info text-white">
										{" "}
										<i
											className="far
												fa-user"
										/>
									</span>{" "}
									<span className="dropdown-item-desc">
										{" "}
										<b>You</b> and <b>Dedik Sugiharto</b> are now friends{" "}
										<span className="time">10 Hours Ago</span>
									</span>
								</a>{" "}
								<a href="#" className="dropdown-item">
									{" "}
									<span className="dropdown-item-icon bg-success text-white">
										{" "}
										<i
											className="fas
												fa-check"
										/>
									</span>{" "}
									<span className="dropdown-item-desc">
										{" "}
										<b>Kusnaedi</b> has moved task <b>Fix bug header</b> to{" "}
										<b>Done</b> <span className="time">12 Hours Ago</span>
									</span>
								</a>{" "}
								<a href="#" className="dropdown-item">
									{" "}
									<span className="dropdown-item-icon bg-danger text-white">
										{" "}
										<i className="fas fa-exclamation-triangle" />
									</span>{" "}
									<span className="dropdown-item-desc">
										{" "}
										Low disk space. Let's clean it!{" "}
										<span className="time">17 Hours Ago</span>
									</span>
								</a>{" "}
								<a href="#" className="dropdown-item">
									{" "}
									<span className="dropdown-item-icon bg-info text-white">
										{" "}
										<i
											className="fas
												fa-bell"
										/>
									</span>{" "}
									<span className="dropdown-item-desc">
										{" "}
										Welcome to Otika template!{" "}
										<span className="time">Yesterday</span>
									</span>
								</a>
							</div>
							<div className="dropdown-footer text-center">
								<a href="#">
									View All <i className="fas fa-chevron-right" />
								</a>
							</div>
						</div>
					</li>
					{/* profile */}
					<li className="dropdown">
						<a
							href="#"
							data-toggle="dropdown"
							className="nav-link dropdown-toggle nav-link-lg nav-link-user"
						>
							{" "}
							<img
								alt="image"
								src="/img/client.jpg"
								className="user-img-radious-style"
							/>{" "}
							<span className="d-sm-none d-lg-inline-block" />
						</a>
						<div className="dropdown-menu dropdown-menu-right pullDown">
							<div className="dropdown-title">Hello Sarah Smith</div>
							<a href="profile.html" className="dropdown-item has-icon">
								{" "}
								<i
									className="far
										fa-user"
								/>{" "}
								Profile
							</a>{" "}
							<a href="timeline.html" className="dropdown-item has-icon">
								{" "}
								<i className="fas fa-bolt" />
								Activities
							</a>{" "}
							<a href="#" className="dropdown-item has-icon">
								{" "}
								<i className="fas fa-cog" />
								Settings
							</a>
							<div className="dropdown-divider" />
							<a
								href="auth-login.html"
								className="dropdown-item has-icon text-danger"
							>
								{" "}
								<i className="fas fa-sign-out-alt" />
								Logout
							</a>
						</div>
					</li>
				</ul>
			</nav>
			{/* Side Bar Here */}
			<AccountSidebar />
		</>
	);
};

export default AccountHeader;
