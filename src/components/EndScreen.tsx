import { Slider } from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
	scores: Array<number>;
	restart: () => void;
}

const Index: FC<Props> = ({ scores, restart }) => {
	const [finalScore, setFinalScore] = useState<number>(0);
	const navigate = useNavigate();

	useEffect(() => {
		let sum: number = 0;
		for (let s of scores) {
			sum += s;
		}
		setFinalScore(Math.floor(sum / scores.length));
	}, [scores, setFinalScore]);

	return (
		<section>
			<h1>Your final score was {finalScore}!</h1>
			<Slider
				defaultValue={finalScore / 5000 * 100}
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
