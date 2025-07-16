import React from "react";
import { GlobalStyle } from "./lib/theme";
import { Placeholder } from "./lib/placeholder";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./lib/theme";
import { Card, InlineMessage } from "./lib";
import { truncate } from "fs";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
			<GlobalStyle />
			<main>
				<Card iconBefore="tag"
					labelText="Hello"
					textHeadindg="Service name"
					textDiscription="Product Description"
					textButtonPrimary="Add to cart"
					textButtonOutline="More details"
		
				/>

			</main>
		</ThemeProvider>
	);
}

export default App;
