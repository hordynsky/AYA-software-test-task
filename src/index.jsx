import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import LegsDatePicker from "@app/features/LegsDatePicker";

// Polyfills
injectTapEventPlugin();

const App = () => (
	<MuiThemeProvider>
		<LegsDatePicker />
	</MuiThemeProvider>
);

ReactDOM.render(
	// <React.StrictMode>
	<App />,
	// </React.StrictMode>,
	document.getElementById("root"),
);
