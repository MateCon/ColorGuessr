import { FC, useEffect } from "react";
import DisplayRound from "./DisplayRound";
import { useNavigate } from "react-router-dom";
import { RGB } from "../types/interfaces";
import Slider from "@material-ui/core/Slider";

interface Props {
	scores: Array<number>;
	round: number;
	color: RGB;
	prevColor: RGB;
}

const Index: FC<Props> = ({ scores, round, color, prevColor }) => {
	const navigate = useNavigate();

	useEffect(() => {
		let listener: any = window.addEventListener("keydown", (e) => {
			if (e.key === "Enter") {
				if (round < 5) navigate("/game");
				else navigate("/end-screen");
			}
		});

		return () => {
			if (listener) window.removeEventListener("keydown", listener);
		}
	});

	return (
		<section>
			<DisplayRound round={round} />
			<h1>You scored {scores[round - 1]}!</h1>
			<Slider
				defaultValue={scores[round - 1] / 5000 * 100}
				disabled
			/>
			<div className="color-result-container">
				<div>
					<p>Your guess: ({color.r}, {color.g}, {color.b})</p>
					<p>Correct answer: ({prevColor.r}, {prevColor.g}, {prevColor.b})</p>
				</div>
				<div>
					<div className="drop" style={{
						backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`
					}} />
					<div className="drop" style={{
						backgroundColor: `rgb(${prevColor.r}, ${prevColor.g}, ${prevColor.b})`
					}} />
				</div>
			</div>
			<button className="btn btn-dark" onClick={() => {
				if (round < 5) navigate("/game");
				else navigate("/end-screen");
			}}>Next</button>
		</section>
	);
};

export default Index;
