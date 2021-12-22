import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Game from "./components/Game";
import Results from "./components/Results";
import EndScreen from "./components/EndScreen";
import "./App.scss";

const App: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Index />} />
				<Route path='/game' element={<Game />} />
				<Route path='/results' element={<Results />} />
				<Route path='/end-screen' element={<EndScreen />} />
				<Route path='*' element={<h1>404 - Page not found.</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
