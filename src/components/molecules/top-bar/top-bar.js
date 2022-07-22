import Image from "next/image";
import SearchInput from "../../atoms/search-input/search-input";
import { Bar, LogoContainer } from "./top-bar.style";

import logo from "/public/assets/Logo_ML@2x.png.png";

const TopBar = () => {
	return (
		<Bar>
			<LogoContainer>
				<Image alt="Business Logo" layout="intrinsic" src={logo} />
			</LogoContainer>
			<SearchInput />
		</Bar>
	);
};

export default TopBar;
