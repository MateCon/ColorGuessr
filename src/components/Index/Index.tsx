import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Github from "../Github";
import Button from "../Button";

const Index: FC = () => {
	const navigate = useNavigate();

	return (
		<div>
			<section>
				<h1>Color Guessr!</h1>
				<Button
					className="btn btn-dark"
					onClick={() => {
						navigate("/game");
					}}
				>Start</Button>
			</section>
			<Github />
		</div>
	);
};

export default Index;
