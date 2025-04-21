import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
