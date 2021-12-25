import { Slider } from "@material-ui/core";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

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
			<Button className="btn btn-dark" onClick={() => {
				restart();
				navigate("/game");
			}}>Play Again</Button>
		</section>
	);
};

export default Index;
