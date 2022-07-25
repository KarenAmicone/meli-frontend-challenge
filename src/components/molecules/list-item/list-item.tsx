import Image from "next/image";
import shipmentIcon from "/public/assets/ic_shipping@2x.png.png";

import {
	Caption,
	ImageContainer,
	Item,
	ProductInfoContainer,
	ProductName,
	ProductPrice,
} from "./list-item.style";
import Text from "../../atoms/text/text";
import Link from "next/link";

type ListItemProps = {
	id: string;
	title: string;
	price: { currency: string; amount: number };
	picture: string;
	free_shipping: boolean;
	city: string;
};

const ListItem = ({
	id,
	title,
	price,
	picture,
	free_shipping,
	city,
}: ListItemProps) => {
	const priceWithSign = () => {
		const options = { style: "currency", currency: price.currency };
		const numberFormat = new Intl.NumberFormat("en-US", options);
		return numberFormat.format(price.amount);
	};

	return (
		<Link href={`/items/${id}`}>
			<Item>
				<ImageContainer>
					<Image alt={title} height={"180px"} src={picture} width="180px" />
				</ImageContainer>
				<ProductInfoContainer>
					<ProductPrice>
						<Text color="darker" size="xlarge">
							{priceWithSign()}{" "}
						</Text>
						{free_shipping && (
							<Image
								alt="Shipment icon"
								height="20px"
								layout="fixed"
								src={shipmentIcon}
								width="20px"
							/>
						)}
					</ProductPrice>
					<ProductName>
						<Text color="darker" size="large">
							{title}
						</Text>
					</ProductName>
					<Caption>
						<Text color="dark" size="xs">
							{city}
						</Text>
					</Caption>
				</ProductInfoContainer>
			</Item>
		</Link>
	);
};
export default ListItem;
