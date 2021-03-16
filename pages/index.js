import Head from "next/head";
import Nav from "../components/Nav";

export default function Home() {
	return (
		<>
			<Head>
				<title>Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
		</>
	);
}
