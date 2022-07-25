import { styled } from "../../../../stitches.config";

export const DescriptionContainer = styled("div", {
	display: "flex",
	flexDirection: "column",
	rowGap: "2rem",
	width: "100%",
	"@bp3": {
		width: "65%",
	},
});
