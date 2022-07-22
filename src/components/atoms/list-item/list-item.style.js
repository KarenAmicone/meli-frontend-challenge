import { styled } from "@stitches/react";

export const Item = styled("div", {
	borderBottom: "1px solid $neutralLight",
	columnGap: "1rem",
	display: "flex",
	paddingBottom: "1rem",
	marginBottom: "1rem",
});

export const ImageContainer = styled("div", {
	backgroundColor: "Blue",
	borderRadius: "4px",
	height: "180px",
	width: "180px",
});

export const ProductInfoContainer = styled("div", {
	alignItems: "baseline",
	display: "grid",
	gridTemplateColumns: "70% 30%",
	gridTemplateRows: "30% 70%",
	height: "180px",
	rowGap: "2rem",
	width: "calc(100% - 196px)",
});

export const ProductPrice = styled("span", {
	alignSelf: "end",
	color: "$secondary",
	fontSize: "24px",
	gridArea: "1/1/2/2",
});

export const ProductName = styled("p", {
	color: "$secondary",
	fontSize: "18px",
	gridArea: "2/1/3/2",
});

export const Caption = styled("p", {
	alignSelf: "end",
	color: "$neutralDark",
	fontSize: "12px",
	gridArea: "1/2/2/3",
});
