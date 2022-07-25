import Image from "next/image";
import Link from "next/link";
import SearchInput from "../../atoms/search-input/search-input";
import { Bar, LogoContainer } from "./top-bar.style";

import logo from "/public/assets/Logo_ML@2x.png.png";

const TopBar = () => {
	return (
		<Bar>
			<Link href="/">
				<LogoContainer>
					<Image alt="Business Logo" layout="intrinsic" src={logo} />
				</LogoContainer>
			</Link>
			<SearchInput />
		</Bar>
	);
};

export default TopBar;
