import { FC } from "react";
import { useNavigate } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";

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
			<div className="github">
				<a href="http://github.com/matecon" target="blank">
					<p>MateCon</p>
					<GitHubIcon />
				</a>
			</div>
		</section>
	);
};

export default Index;
