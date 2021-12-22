import { FC, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { generateColor, setBgColor, setTheme, getTheme } from "./helpers/ColorMethods";
import { RGB } from "./types/interfaces";
import Index from "./components/Index";
import Game from "./components/Game";
import Results from "./components/Results";
import EndScreen from "./components/EndScreen";
import "./App.scss";

const App: FC = () => {
	const [color, setColor] = useState<RGB>({ r: 0, g: 0, b: 0 });
	const [prevColor, setPrevColor] = useState<RGB>({ r: 0, g: 0, b: 0 });
	const [scores, setScores] = useState<Array<number>>([0, 0, 0, 0, 0]);
	const [round, setRound] = useState<number>(0);

	useEffect(() => {
		changeColor();
	}, [setColor]);

	const changeColor = (): void => {
		const c: RGB = generateColor();
		setColor(c);
		setBgColor(c);
		setTheme(getTheme(c));
	};

	const restart = (): void => {
		setScores([0, 0, 0, 0, 0]);
		setRound(0);
		changeColor();
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Index />} />
				<Route path='/game' element={<Game color={color} setColor={setColor} round={round} setRound={setRound} setScores={setScores} changeColor={changeColor} setPrevColor={setPrevColor} />} />
				<Route path='/results' element={<Results scores={scores} round={round} color={color} prevColor={prevColor} />} />
				<Route path='/end-screen' element={<EndScreen scores={scores} restart={restart} />} />
				<Route path='*' element={<h1>404 - Page not found.</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
