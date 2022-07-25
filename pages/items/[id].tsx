import { GetServerSideProps } from "next";
import ViewProduct from "../../src/components/organsims/view-product/view-product";

type ProductDetailProps = {
	results: {
		item: {
			title: string;
			picture: string;
			condition: string;
			id: string;
			price: {
				currency: string;
				amount: number;
			};
			sold_quantity: number;
			description: string;
		};
	};
};

function ProductDetail({ results }: ProductDetailProps) {
	return <ViewProduct product={results} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;
	const data = await fetch(
		`https://meli-frontend-challenge-six.vercel.app/api/items/${id}`
	);
	const productResult = await data.json();
	return {
		props: {
			results: productResult,
		},
	};
};

export default ProductDetail;
