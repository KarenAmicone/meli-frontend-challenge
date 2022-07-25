import Text from "../text/text";
import { CategoriesContainer } from "./categories.style";

type CategoryProps = {
	categories: [[{ path_from_root: [] }]];
	category?: object;
};

const Categories = ({ categories }: CategoryProps) => {
	const arr = categories[0];

	return (
		<CategoriesContainer>
			{arr !== undefined && (
				<Text color="neutral" size="medium">
					{arr[0].path_from_root.map(
						(category: { name: string }) => ` ${category.name} >`
					)}
				</Text>
			)}
		</CategoriesContainer>
	);
};

export default Categories;
