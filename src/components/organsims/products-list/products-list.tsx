import ListItem from '../../molecules/list-item/list-item';
import { StyledList } from './products-list.style';
type ProductsListProps = {
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
};

const ProductsList = ({ items }: ProductsListProps) => {
	return (
		<StyledList>
			{items?.map((item) => (
				<ListItem
					city={item.city}
					free_shipping={item.free_shipping}
					id={item.id}
					key={item.id}
					picture={item.picture}
					price={item.price}
					title={item.title}
				/>
			))}
		</StyledList>
	);
};

export default ProductsList;
