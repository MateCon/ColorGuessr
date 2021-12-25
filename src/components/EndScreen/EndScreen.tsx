import { Slider } from "@material-ui/core";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
	scores: Array<number>;
	restart: () => void;
}

const Index: FC<Props> = ({ scores, restart }) => {
	const navigate = useNavigate();

	const getFinalScore = (): number => {
		let sum: number = 0;
		for (let s of scores) {
			sum += s;
		}
		return Math.floor(sum / scores.length);
	}

	return (
		<section>
			<h1>Your final score was {getFinalScore()}!</h1>
			<Slider
				defaultValue={Math.round(getFinalScore() / 5000 * 100)}
				disabled
			/>
			<button className="btn btn-dark" onClick={() => {
				restart();
				navigate("/game");
			}}>Play Again</button>
		</section>
	);
};

export default Index;
