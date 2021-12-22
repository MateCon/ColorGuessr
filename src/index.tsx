import { render } from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

render(
	<Auth0Provider
		domain='matecon.us.auth0.com'
		clientId='6zQesEyDjIBGrAQK6xjKm69knFMEXHlJ'
		redirectUri={window.location.origin}
	>
		<App />
	</Auth0Provider>,
	document.getElementById("root")
);
