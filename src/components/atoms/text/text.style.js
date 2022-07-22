import { styled } from "@stitches/react";

export const StyledText = styled("span", {
	variants: {
		size: {
			xxxl: {
				fontSize: 46,
			},
			xxl: {
				fontSize: 28,
			},
			xlarge: {
				fontSize: 24,
			},
			large: {
				fontSize: 18,
			},
			medium: {
				fontSize: 16,
			},
			small: {
				fontSize: 14,
			},
			xs: {
				fontSize: 12,
			},
		},
		color: {
			darker: {
				color: "$secondary",
			},
			dark: {
				color: "$neutralDark",
			},
			neutral: {
				color: "$neutral",
			},
		},
	},
});
