import { StyledButton } from "./button.style";

const Button = ({ children }) => {
	return (
		<StyledButton
			onClick={() => {
				console.log("click");
			}}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
