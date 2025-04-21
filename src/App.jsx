import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/about" element={<AboutScreen />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
