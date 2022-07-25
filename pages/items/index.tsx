/* import { GetServerSideProps } from "next";
import { searchingItems } from "../../src/services/api"; */

function Items() {
	return <div></div>;
}

/* export const getServerSideProps: GetServerSideProps = async (context) => {
	const { query } = context;
	const data = await fetch(`localhost:3000/api/items/?q=${query.q}`);
	const ItemsData = data.json();
	const data = await searchingItems(query.q);
	const itemsData = JSON.parse(JSON.stringify(data));
	return {
		props: {
			items: ItemsData,
		},
	};
}; */

export default Items;
