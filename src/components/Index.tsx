import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Index: FC = () => {
	const navigate = useNavigate();

	return (
		<section>
			<h1>Color Guessr!</h1>
			<button
				className="btn btn-dark"
				onClick={() => {
					navigate("/game");
				}}
			>Start</button>
		</section>
	);
};

export default Index;
