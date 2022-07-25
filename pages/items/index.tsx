import { GetServerSideProps } from "next";
import Categories from "../../src/components/atoms/categories/categories";
import ProductsList from "../../src/components/organsims/products-list/products-list";

type ResultProps = {
	results: {
		items: [
			{
				city: string;
				free_shipping: boolean;
				id: string;
				picture: string;
				price: {
					amount: number;
					currency: string;
				};
				title: string;
			}
		];
		categories: [[{ path_from_root: [] }]];
	};
};

function SearchResult({ results }: ResultProps) {
	return (
		<>
			<Categories categories={results.categories} />
			<ProductsList items={results.items} />{" "}
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { query } = context;
	const data = await fetch(
		`https://meli-frontend-challenge-six.vercel.app/api/items/?q=${query.q}`
	);
	const searchResults = await data.json();
	return {
		props: {
			results: searchResults,
		},
	};
};

export default SearchResult;
