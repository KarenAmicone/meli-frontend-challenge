import Text from "../../atoms/text/text";
import { InfoContainer, PrimaryInfo } from "./product-info.style";
import Button from "../../atoms/button/button";

const ProductInfo = () => {
	return (
		<InfoContainer>
			<PrimaryInfo>
				<Text color="darker" size="small">
					Nuevo - 24 vendidos
				</Text>
				<Text color="darker" size="xlarge">
					Deco Reverse Sombrero Oxford
				</Text>
			</PrimaryInfo>
			<Text color="darker" size="xxxl">
				$1.980
			</Text>
			<Button>Comprar</Button>
		</InfoContainer>
	);
};

export default ProductInfo;
