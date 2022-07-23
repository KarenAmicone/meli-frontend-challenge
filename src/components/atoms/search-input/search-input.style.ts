import { styled } from "../../../../stitches.config";

export const Input = styled("input", {
	border: "none",
	borderTopLeftRadius: "3px",
	borderBottomLeftRadius: "3px",
	fontSize: "18px",
	"&::placeholder": {
		color: "$neutral",
		fontSize: "18px",
	},
	outline: "none",
	padding: "0.5rem 1rem",
	width: "100%",
});

export const SearchButton = styled("button", {
	borderTopRightRadius: "3px",
	borderBottomRightRadius: "3px",
	alignItems: "center",
	backgroundColor: "$neutralLight",
	border: "none",
	display: "flex",
	height: "100%",
	justifyContent: "center",
	width: "45px",
});

export const Form = styled("form", {
	display: "flex",
	height: "45px",
	width: "100%",
});
