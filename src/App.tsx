import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";

const App: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Index />} />
				<Route path='*' element={<h1>404 - Page not found.</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
