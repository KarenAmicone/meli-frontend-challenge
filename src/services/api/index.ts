export const searchingItems = (query) => {
	fetch(`/api/items/?q=${query}`)
		.then((res) => res.json())
		.then((data) => data);
};
