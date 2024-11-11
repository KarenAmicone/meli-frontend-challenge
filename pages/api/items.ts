import { NextApiRequest, NextApiResponse } from 'next';

type Category = {
	category: {};
	values: [];
};

type Item = {
	id: string;
	title: string;
	currency_id: string;
	price: object;
	thumbnail: string;
	condition: string;
	shipping: {
		free_shipping: boolean;
	};
	address: {
		state_name: string;
	};
	item: {};
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { q } = req.query;
	const data = await fetch(
		`https://api.mercadolibre.com/sites/MLA/search?q=${q}`
	)
		.then((response) => response.json())
		.then((data) => {
			const fourItems = data.results.slice(0, 4);
			return {
				author: { name: 'Karen', lastname: 'Amicone' },
				categories: data.filters.map((category: Category) => category.values),
				items: fourItems.map((item: Item) => ({
					id: item?.id,
					title: item?.title,
					price: {
						currency: item?.currency_id,
						amount: item?.price,
					},
					picture: item?.thumbnail,
					condition: item?.condition,
					free_shipping: item?.shipping?.free_shipping,
					city: item?.address?.state_name,
				})),
			};
		});
	return res.json(data);
}
