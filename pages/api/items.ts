import { NextApiRequest, NextApiResponse } from "next";

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
				author: { name: "Karen", lastname: "Amicone" },
				categories: data.available_filters.map((category) => category.name),
				items: fourItems.map((item) => ({
					id: item.id,
					title: item.title,
					price: {
						currency: item.currency_id,
						amount: item.price,
					},
					picture: item.thumbnail,
					condition: item.condition,
					free_shipping: item.shipping.free_shipping,
				})),
			};
		});
	return res.json(data);
}
