import { ThemeProvider } from "@emotion/react";
import theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withThemeProvider = (Story, context) => {
	return (
			<ThemeProvider theme={theme}>
				<Story {...context} />
			</ThemeProvider>
	);
};

export const decorators = [withThemeProvider];