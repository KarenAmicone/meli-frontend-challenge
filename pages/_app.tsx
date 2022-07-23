import { globalCss } from "@stitches/react";
import { AppProps } from "next/app";
import Layout from "../src/components/organsims/layout/layout";
import "../styles/globals.css";

const globalStyles = globalCss({
	"*": { margin: 0, padding: 0 },
	body: { minHeight: "100vh" },
});

function App({ Component, pageProps }: AppProps) {
	globalStyles();

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
