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

const ListItem = () => {
	return (
		<Item>
			<ImageContainer></ImageContainer>
			<ProductInfoContainer>
				<ProductPrice>
					$1,000{" "}
					<Image
						alt="Shipment icon"
						height="20px"
						layout="fixed"
						src={shipmentIcon}
						width="20px"
					/>
				</ProductPrice>
				<ProductName>Samsung Galaxy M13</ProductName>
				<Caption>Mendoza</Caption>
			</ProductInfoContainer>
		</Item>
	);
};
export default ListItem;
