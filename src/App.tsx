import React from "react";
import { GlobalStyle } from "./lib/theme";
import { Placeholder } from "./lib/placeholder";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./lib/theme";
import { Button, ButtonLink } from "./lib";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
			<GlobalStyle />
			<main>
				<Button iconBefore="meta" iconAfter="meta" text="Button Primary"   />
				<Button iconBefore="meta" iconAfter="meta" appearance="outline" text="Button Outline" size="large"/>
				<Button iconBefore="meta" iconAfter="meta" appearance="flat" text="Button Flat" size="medium"/>
				<ButtonLink iconBefore="meta" iconAfter="meta" appearance="primary" text="Button Link" size="medium"/>
				<ButtonLink iconBefore="meta" iconAfter="meta" appearance="secondary" text="Button Link" size="large"/>
			</main>
		</ThemeProvider>
	);
}

export default App;
