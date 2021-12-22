import { FC } from "react";
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

	return (
		<section>
			<DisplayRound round={round} />
			<h1>You scored {scores[round - 1]}!</h1>
			<Slider
				defaultValue={scores[round - 1] / 5000 * 100}
				disabled
			/>
			<p>Your guess was: {color.r}, {color.g}, {color.b}</p>
			<p>The correct answer was: {prevColor.r}, {prevColor.g}, {prevColor.b}</p>
			<button className="btn btn-dark" onClick={() => {
				if (round < 5) navigate("/game");
				else navigate("/end-screen");
			}}>Next</button>
		</section>
	);
};

export default Index;
