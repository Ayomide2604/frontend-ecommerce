import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CiMonitor } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { FaCaretDown, FaCaretRight, FaStore } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoReceiptOutline, IoSettingsOutline } from "react-icons/io5";
import { TbLockPassword } from "react-icons/tb";
import { LuTickets } from "react-icons/lu";

const AccountSidebar = () => {
	const [storeMenuopen, setStoreMenuOpen] = useState(false);
	const [profileMenuopen, setProfileMenuOpen] = useState(false);
	const [orderMenuopen, setOrderMenuOpen] = useState(false);

	return (
		<div
			className="  main-sidebar sidebar-style-1"
			style={{ height: "100vh", overflow: "auto" }}
		>
			<aside id="sidebar-wrapper">
				<div className="sidebar-brand">
					<a href="/">
						<img
							alt="Logo"
							src="/img/favicon.png"
							className="header-logo mr-2"
						/>
						<span className="logo-name">Famms</span>
					</a>
				</div>
				<ul className="sidebar-menu">
					<li className="menu-header">Overview</li>

					{/* Dashboard Dropdown */}
					<li className="dropdown">
						<Link to="/account" className="nav-link active gap-2">
							<CiMonitor size={25} />
							<span>Dashboard</span>
						</Link>
					</li>
					<li className="menu-header">Main</li>

					{/* Store Dropdpwn */}
					<li className="dropdown ">
						<Link
							onClick={() => setStoreMenuOpen((prev) => !prev)}
							className=" nav-link has-dropdown gap-2"
						>
							<FaStore size={25} className="" />
							<span>Store</span>

							{storeMenuopen ? <FaCaretDown /> : <FaCaretRight />}
						</Link>
						<ul
							className={
								storeMenuopen ? "dropdown-menu show" : "dropdown-menu "
							}
						>
							<li>
								<Link
									to="/account/collections"
									className="nav-link gap-2"
									href="#"
								>
									<BiCategoryAlt />
									<span>Categories</span>
								</Link>
							</li>
							<li>
								<Link
									to="/account/products"
									className="nav-link gap-2"
									href="portfolio.html"
								>
									<MdOutlineLocalGroceryStore />
									Products
								</Link>
							</li>
						</ul>
					</li>

					{/* Orders DropDown */}
					<li className="dropdown">
						<Link
							onClick={() => setOrderMenuOpen((prev) => !prev)}
							className=" nav-link has-dropdown gap-2"
						>
							<IoReceiptOutline size={25} className="" />
							<span>Orders</span>

							{orderMenuopen ? <FaCaretDown /> : <FaCaretRight />}
						</Link>
						<ul
							className={
								orderMenuopen ? "dropdown-menu show" : "dropdown-menu "
							}
						>
							<li>
								<Link className="nav-link gap-2" href="#">
									<LuTickets />
									<span>All Orders</span>
								</Link>
							</li>
						</ul>
					</li>
					{/* Account Dropdown */}
					<li className="menu-header">Account</li>
					<li className="dropdown">
						<Link
							onClick={() => setProfileMenuOpen((prev) => !prev)}
							className=" nav-link has-dropdown gap-2"
						>
							<CgProfile size={25} />
							<span>Profile</span>

							{profileMenuopen ? <FaCaretDown /> : <FaCaretRight />}
						</Link>
						<ul
							className={
								profileMenuopen ? "dropdown-menu show" : "dropdown-menu "
							}
						>
							<li>
								<Link className="nav-link  gap-2 " to="/account/users">
									<CgProfile />
									<span>Users</span>
								</Link>
							</li>
							<li>
								<Link className="nav-link  gap-2 " to="/account/profile">
									<IoSettingsOutline />
									<span>Profile Settings</span>
								</Link>
							</li>
							<li>
								<Link className="nav-link gap-2 " to="/account/change_password">
									<TbLockPassword />
									<span>Change Password</span>
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</aside>
		</div>
	);
};

export default AccountSidebar;
