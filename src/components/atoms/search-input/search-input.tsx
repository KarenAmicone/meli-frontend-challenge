import Image from "next/image";
import { Form, Input, SearchButton } from "./search-input.style";
import searchIcon from "/public/assets/ic_Search@2x.png.png";
import { useState } from "react";
import { useRouter } from "next/router";

const SearchInput = () => {
	const [query, setQuery] = useState("");

	const router = useRouter();

	const searchItems = () => {
		router.push(`/items/?q=${query}`);
	};

	return (
		<Form>
			<Input
				onChange={(event) => setQuery(event.target.value)}
				placeholder="Nunca dejes de buscar"
				value={query}
			/>
			<SearchButton
				onClick={(event) => {
					event.preventDefault();
					searchItems();
				}}
				type="submit"
			>
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
