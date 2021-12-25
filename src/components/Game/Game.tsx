import { FC, useEffect } from "react";
import { RGB } from "../../types/interfaces";
import { Formik, Form } from "formik";
import TextField from "../TextField";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import DisplayRound from "../DisplayRound";
import { getScore } from "../../helpers/ColorMethods";
import Button from "../Button";

const validationSchema = yup.object({
	r: yup.number().typeError("This field requires a number").required("This field is required").min(0, "The minumum is 0").max(255, "The maximum is 255"),
	g: yup.number().typeError("This field requires a number").required("This field is required").min(0, "The minumum is 0").max(255, "The maximum is 255"),
	b: yup.number().typeError("This field requires a number").required("This field is required").min(0, "The minumum is 0").max(255, "The maximum is 255")
});

interface Props {
	color: RGB;
	setColor: (color: RGB) => void;
	round: number;
	setRound: (a: any) => void;
	setScores: (a: any) => void;
	changeColor: () => void;
	setPrevColor: (color: RGB) => void;
};

const Game: FC<Props> = ({ color, setColor, round, setRound, setScores, changeColor, setPrevColor }) => {
	const navigate = useNavigate();

	useEffect(() => {
		setRound((r: number) => r + 1);
		changeColor();
	}, [setRound]);

	return (
		<section>
			<DisplayRound round={round} />
			<h1>What color is this?</h1>
			<Formik
				initialValues={{
					r: null,
					g: null,
					b: null,
				}} validationSchema={validationSchema}
				onSubmit={async (values, { setSubmitting }) => {
					setSubmitting(true);
					if (!values.r || !values.g || !values.b) {
						setSubmitting(false);
						return;
					}
					const c: RGB = { r: values.r, g: values.g, b: values.b };
					setScores((scores: Array<number>) => {
						scores[round - 1] = getScore(c, color);
						return scores;
					});
					setPrevColor(color);
					setColor(c);
					setSubmitting(false);
					navigate("/results");
				}}
			>
				{() => (
					<Form className="form">
						<div>
							<TextField
								placeholder="Red"
								name="r"
								type="number"
								required
							/>
							<TextField
								placeholder="Green"
								name="g"
								type="number"
								required
							/>
							<TextField
								placeholder="Blue"
								name="b"
								type="number"
								required
							/>
						</div>
						<Button type="submit" className="btn btn-dark">Guess</Button>
					</Form>
				)}
			</Formik>
		</section>
	);
};

export default Game;
