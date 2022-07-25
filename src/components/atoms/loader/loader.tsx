import Text from "../text/text";
import { styled } from "@stitches/react";

const Loader = () => {
	const Container = styled("div", {
		width: "100%",
		height: "60vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	});
	return (
		<Container>
			<Text color="darker" size="xxxl">
				Cargando
			</Text>
		</Container>
	);
};
export default Loader;
