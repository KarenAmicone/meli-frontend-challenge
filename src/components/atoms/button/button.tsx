import { StyledButton } from "./button.style";

type ButtonProps = {
	children: React.ReactNode;
};
const Button = ({ children }: ButtonProps) => {
	return <StyledButton>{children}</StyledButton>;
};

export default Button;
