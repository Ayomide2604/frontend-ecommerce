import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./assets/css/components.css";
import "./assets/css/custom.css";
import "./assets/css/app.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/style.css";
import "./assets/css/style2.css";
import "./assets/css/bootstrap.css";
import "./assets/css/responsive.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);
