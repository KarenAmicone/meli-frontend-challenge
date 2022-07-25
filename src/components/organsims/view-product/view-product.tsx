import ProductDescription from "../../molecules/product-description/product-description";
import ProductInfo from "../../molecules/product-info/product-info";
import { Container, ImageContainer, Article } from "./view-product.style";

type ViewProductProps = {
	product: {
		item: {
			title: string;
			picture: string;
			condition: string;
			id: string;
			price: {
				currency: string;
				amount: number;
			};
			sold_quantity: number;
			description: string;
		};
	};
};

const ViewProduct = ({ product }: ViewProductProps) => {
	const { item } = product;
	return (
		<Container>
			<Article>
				<ImageContainer>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						alt={item.title}
						src={item.picture}
						style={{ width: "100%" }}
					></img>
				</ImageContainer>
				<ProductInfo
					condition={item.condition}
					key={item.id}
					price={item.price}
					sold_quantity={item.sold_quantity}
					title={item.title}
				/>
			</Article>
			<ProductDescription description={item.description} />
		</Container>
	);
};

export default ViewProduct;
