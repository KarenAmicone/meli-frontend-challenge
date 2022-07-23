import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../stitches.config";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<style
						dangerouslySetInnerHTML={{ __html: getCssText() }}
						id="stitches"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
