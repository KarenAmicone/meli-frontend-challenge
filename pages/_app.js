import { globalCss } from "@stitches/react";
import Layout from "../src/components/organsims/layout/layout";
import "../styles/globals.css";

const globalStyles = globalCss({
	"*": { margin: 0, padding: 0 },
});

function App({ Component, pageProps }) {
	globalStyles();

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
