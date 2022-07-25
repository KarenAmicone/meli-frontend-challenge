import { globalCss } from "@stitches/react";
import { AppProps } from "next/app";
import Layout from "../src/components/organsims/layout/layout";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { Router } from "next/router";
import Loader from "../src/components/atoms/loader/loader";

const globalStyles = globalCss({
	body: { minHeight: "100vh" },
});

function App({ Component, pageProps }: AppProps) {
	globalStyles();

	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const start = () => {
			setLoading(true);
		};
		const end = () => {
			setLoading(false);
		};
		Router.events.on("routeChangeStart", start);
		Router.events.on("routeChangeComplete", end);
		Router.events.on("routeChangeError", end);
		return () => {
			Router.events.off("routeChangeStart", start);
			Router.events.off("routeChangeComplete", end);
			Router.events.off("routeChangeError", end);
		};
	}, []);

	return loading ? (
		<Layout>
			<Loader />
		</Layout>
	) : (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
