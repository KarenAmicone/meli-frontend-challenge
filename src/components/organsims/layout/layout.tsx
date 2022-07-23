import TopBar from "../../molecules/top-bar/top-bar";
import { Main, Section } from "./layout.style";

const Layout = ({ children }) => {
	return (
		<Main>
			<TopBar />
			<Section>{children}</Section>
		</Main>
	);
};

export default Layout;
