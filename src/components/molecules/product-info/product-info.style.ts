import { styled } from "../../../../stitches.config";

export const InfoContainer = styled("div", {
	display: "flex",
	flexDirection: "column",
	rowGap: "2rem",
	width: "100%",
	"@bp3": {
		width: "28%",
	},
});

export const PrimaryInfo = styled("div", {
	display: "flex",
	flexDirection: "column",
	rowGap: "1rem",
});
