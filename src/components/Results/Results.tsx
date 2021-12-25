import { FC, useEffect, useState } from "react";
import DisplayRound from "../DisplayRound";
import { useNavigate } from "react-router-dom";
import { RGB } from "../../types/interfaces";
import Slider from "@material-ui/core/Slider";
import ColorResult from "../ColorResult";
import Button from "../Button";
import confettiConfig from "../../helpers/ConfettiConfig";
import Confetti from "react-dom-confetti";
import "./Results.scss";

interface Props {
	scores: Array<number>;
	round: number;
	color: RGB;
	prevColor: RGB;
}

const Index: FC<Props> = ({ scores, round, color, prevColor }) => {
	const [confetti, setConfetti] = useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (confettiConfig.elementCount)
			confettiConfig.elementCount += Math.floor(scores[round - 1] / 250);

		if (scores[round - 1] > 4000)
			setConfetti(true);

		let listener: any = window.addEventListener("keydown", (e) => {
			if (e.key === "Enter") {
				if (round < 5) navigate("/game");
				else navigate("/end-screen");
			}
		});

		return () => {
			if (listener) window.removeEventListener("keydown", listener);
		}
	}, [round, navigate, scores]);

	return (
		<section>
			<Confetti active={confetti} config={confettiConfig} />
			<DisplayRound round={round} />
			<h1>You scored {scores[round - 1]}!</h1>
			<Slider
				defaultValue={scores[round - 1] / 5000 * 100}
				disabled
			/>
			<ColorResult color={color} prevColor={prevColor} />
			<Button className="btn btn-dark" onClick={() => {
				if (round < 5) navigate("/game");
				else navigate("/end-screen");
			}}>Next</Button>
		</section>
	);
};

export default Index;
