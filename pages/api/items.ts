export default async function handler(req, res) {
	const data = await fetch(
		"https://api.mercadolibre.com/sites/MLA/search?q=telefono"
	)
		.then((response) => response.json())
		.then((data) => data);
	return res.json(data);
}
