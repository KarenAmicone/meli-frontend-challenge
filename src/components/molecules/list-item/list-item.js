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

const ListItem = () => {
	return (
		<Item>
			<ImageContainer></ImageContainer>
			<ProductInfoContainer>
				<ProductPrice>
					<Text color="darker" size="xlarge">
						$1,000{" "}
					</Text>
					<Image
						alt="Shipment icon"
						height="20px"
						layout="fixed"
						src={shipmentIcon}
						width="20px"
					/>
				</ProductPrice>
				<ProductName>
					<Text color="darker" size="large">
						Samsung Galaxy M13
					</Text>
				</ProductName>
				<Caption>
					<Text color="dark" size="xs">
						Mendoza
					</Text>
				</Caption>
			</ProductInfoContainer>
		</Item>
	);
};
export default ListItem;
