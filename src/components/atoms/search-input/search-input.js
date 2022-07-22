import Image from "next/image";
import { Form, Input, SearchButton } from "./search-input.style";
import searchIcon from "/public/assets/ic_Search@2x.png.png";

const SearchInput = () => {
	return (
		<Form>
			<Input placeholder="Nunca dejes de buscar" />
			<SearchButton>
				<Image
					alt="Search icon"
					height="20px"
					src={searchIcon.src}
					width="20px"
				/>
			</SearchButton>
		</Form>
	);
};

export default SearchInput;
