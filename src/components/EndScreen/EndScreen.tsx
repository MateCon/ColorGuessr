import { Slider } from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import confettiConfig from "../../helpers/ConfettiConfig";
import Confetti from "react-dom-confetti";
import { config } from "process";

interface Props {
	scores: Array<number>;
	restart: () => void;
}

const Index: FC<Props> = ({ scores, restart }) => {
	const [confetti, setConfetti] = useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (getFinalScore() > 4000) setConfetti(true);
	});

	const getFinalScore = (): number => {
		let sum: number = 0;
		for (let s of scores) {
			sum += s;
		}
		return Math.floor(sum / scores.length);
	}

	return (
		<section>
			<Confetti active={confetti} config={{ ...confettiConfig, stagger: 10, elementCount: 200, duration: 6000 }} />
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
