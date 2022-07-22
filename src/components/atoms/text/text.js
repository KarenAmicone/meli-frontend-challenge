import { StyledText } from "./text.style";

const Text = ({ children, color, size }) => {
	return (
		<StyledText color={color} size={size}>
			{children}
		</StyledText>
	);
};

export default Text;
