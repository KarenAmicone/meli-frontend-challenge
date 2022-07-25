import { DescriptionContainer } from "./product-description.style";
import Text from "../../atoms/text/text";

type DescriptionProps = {
	description: string;
};

const ProductDescription = ({ description }: DescriptionProps) => {
	return (
		<DescriptionContainer>
			<Text color="darker" size="xxl">
				Descripción del producto
			</Text>
			<Text color="neutral" size="medium">
				{description}
			</Text>
		</DescriptionContainer>
	);
};

export default ProductDescription;
