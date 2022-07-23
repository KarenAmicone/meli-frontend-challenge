import { DescriptionContainer } from "./product-description.style";
import Text from "../../atoms/text/text";

const ProductDescription = () => {
	return (
		<DescriptionContainer>
			<Text color="darker" size="xxl">
				Descripción del producto
			</Text>
			<Text color="neutral" size="medium">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis,
				ligula eget feugiat vestibulum, justo nunc interdum quam, nec suscipit
				ligula felis vel ligula. Ut eleifend, nulla id pulvinar volutpat, turpis
				nisl dignissim arcu, quis fermentum quam sapien eget nibh. Sed at odio
				vel risus posuere malesuada. Nulla id turpis rhoncus, aliquet neque sit
				amet, feugiat elit. Nullam suscipit consectetur felis sit amet viverra.
				Donec maximus imperdiet arcu, eget commodo leo eleifend et. Mauris quis
				faucibus turpis, in fringilla dui. Praesent mauris nisi, convallis at
				elit eget, finibus finibus dui. Praesent suscipit felis vitae massa
				bibendum hendrerit. Aliquam blandit, felis nec tristique venenatis,
				risus est fringilla nisl, id tempor tortor risus sed purus. Nulla vitae
				placerat augue, in mattis purus. Quisque nunc sem, convallis et cursus
				in, facilisis nec quam. Nunc aliquam ligula id urna suscipit volutpat.
				Mauris nisl enim, interdum in aliquet et, pharetra sed ante.
			</Text>
		</DescriptionContainer>
	);
};

export default ProductDescription;
