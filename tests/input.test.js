import {
	fireEvent,
	getByPlaceholderText,
	render,
} from "@testing-library/react";
import { Input } from "../src/components/atoms/search-input/search-input.style";

describe("<Input />", () => {
	it("should renders", () => {
		render(<Input />);
	});

	it("should contains a placeholder", () => {
		const { getByPlaceholderText } = render(
			<Input placeholder="Placeholder" />
		);
		expect(getByPlaceholderText("Placeholder")).toBeTruthy();
	});
});
