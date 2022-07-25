import Text from "../../atoms/text/text";
import { InfoContainer, PrimaryInfo } from "./product-info.style";
import Button from "../../atoms/button/button";

type ProductInfoProps = {
	condition: string;
	sold_quantity?: number;
	title: string;
	price: {
		currency: string;
		amount: number;
	};
};

const ProductInfo = ({
	condition,
	sold_quantity,
	title,
	price,
}: ProductInfoProps) => {
	const priceWithSign = () => {
		const options = { style: "currency", currency: price.currency };
		const numberFormat = new Intl.NumberFormat("en-US", options);
		return numberFormat.format(price.amount);
	};

	return (
		<InfoContainer>
			<PrimaryInfo>
				<Text color="darker" size="small">
					{`${
						condition === "new" ? "Nuevo" : "Usado"
					} - ${sold_quantity} vendidos`}
				</Text>
				<Text color="darker" size="xlarge">
					{title}
				</Text>
			</PrimaryInfo>
			<Text color="darker" size="xxxl">
				{priceWithSign()}
			</Text>
			<Button>Comprar</Button>
		</InfoContainer>
	);
};

export default ProductInfo;
