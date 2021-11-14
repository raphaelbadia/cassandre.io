import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboveTheFold from "../components/AboveTheFold";
import Faq from "../components/Faq";
import Navigation from "../components/Navigation";
import PostersSlider from "../components/PostersSlider";
import Roadmap from "../components/Roadmap";
import Section from "../components/Section";
import Welcome from "../components/Welcome";

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

      <Section className="bg-gray-900">
        <Navigation />
        <AboveTheFold />
      </Section>

      <Section className="py-24 bg-yellow-500">
        <Welcome />
      </Section>

      <Section className="py-24 bg-gray-900" id="roadmap">
        <Roadmap />
      </Section>

      <Section className="py-24 bg-yellow-500">
        <PostersSlider />
      </Section>

      <Section className="py-24 bg-gray-900">
        <Faq />
      </Section>
    </main>
  );
};

export default Home;
