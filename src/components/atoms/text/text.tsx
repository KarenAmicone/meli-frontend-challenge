import { StyledText } from "./text.style";

type TextProps = {
	color: "dark" | "darker" | "neutral";
	size?: "xxxl" | "xxl" | "xlarge" | "large" | "medium" | "small" | "xs";
	children: React.ReactNode;
};

const Text = ({ children, color, size }: TextProps) => {
	return (
		<StyledText color={color} size={size}>
			{children}
		</StyledText>
	);
};

export default Text;
