import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

	body {
           

            font-family: ${props => props.theme.typography.fontFamily.base};
            background: ${props => props.theme.colors.bg.global.calm};
	}
`;
