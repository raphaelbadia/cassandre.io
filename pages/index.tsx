import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboveTheFold from "../components/AboveTheFold";
import Navigation from "../components/Navigation";
import Section from "../components/Section";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Cassandre&rsquo; Legacy</title>
        <meta
          name="description"
          content="Pixcop, please find me a good text for this"
        />
      </Head>

      <Section>
        <Navigation />
        <AboveTheFold />
      </Section>
    </main>
  );
};

export default Home;
