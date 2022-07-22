import { createStitches } from "@stitches/react";

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	theme: {
		colors: {
			primary: "#EFE60C",
			secondary: "#333333",
			neutralDark: "#666666",
			neutral: "#999999",
			neutralLight: "#EEEEEE",
			accent: "#3883FA",
		},
	},
});
