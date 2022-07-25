import { styled } from "../../../../stitches.config";

export const Container = styled("div", {
	backgroundColor: "White",
	borderRadius: "4px",
	display: "flex",
	flexDirection: "column",
	rowGap: "4rem",
	margin: "0 auto",
	padding: "2rem",
	width: "80%",
});

export const Article = styled("article", {
	display: "flex",
	justifyContent: "space-between",
	flexDirection: "column",
	"@bp3": {
		flexDirection: "row",
	},
});

export const ImageContainer = styled("div", {
	width: "100%",
	height: "auto",
	objectFit: "contain",
	display: "flex",
	justifyContent: "center",
	"@bp2": {
		width: "60%",
	},
});
