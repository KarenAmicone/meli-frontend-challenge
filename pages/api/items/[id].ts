import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { id } = req.query;
	const itemData = await fetch(`https://api.mercadolibre.com/items/${id}`)
		.then((response) => response.json())
		.then((data) => data);
	const itemDescription = await fetch(
		`https://api.mercadolibre.com/items/${id}/description`
	)
		.then((response) => response.json())
		.then((data) => data);

	const data = {
		author: {
			name: "Karen",
			lastname: "Amicone",
		},
		item: {
			id: itemData.id,
			title: itemData.title,
			price: {
				currency: itemData.currency_id,
				amount: itemData.price,
			},
			picture: itemData.pictures[0].url,
			condition: itemData.condition,
			free_shipping: itemData.shipping.free_shipping,
			sold_quantity: itemData.sold_quantity,
			description: itemDescription.plain_text,
		},
	};
	return res.json(data);
}
