import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Github from "../Github";

const Index: FC = () => {
	const navigate = useNavigate();

	return (
		<div>
			<section>
				<h1>Color Guessr!</h1>
				<button
					className="btn btn-dark"
					onClick={() => {
						navigate("/game");
					}}
				>Start</button>
			</section>
			<Github />
		</div>
	);
};

export default Index;
