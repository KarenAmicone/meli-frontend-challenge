import { StyledButton } from "./button.style";

type ButtonProps = {
	children: React.ReactNode;
};
const Button = ({ children }: ButtonProps) => {
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
