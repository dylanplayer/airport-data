import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Airport Data</title>
        <meta name="description" content="Airport Data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={'/airports/'}>Airports</Link>
      <Link href={'/flights/'}>Flights</Link>
    </>
  );
};

export default Home;
