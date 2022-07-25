import TopBar from "../../molecules/top-bar/top-bar";
import { Main, Section } from "./layout.style";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<Main>
			<TopBar />
			<Section>{children}</Section>
		</Main>
	);
};

export default Layout;
