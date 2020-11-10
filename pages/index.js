import Head from "next/head";
import HeroSection from "../sections/Hero";
import Projects from "../sections/Projects";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Praveen Kumar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Projects />
    </div>
  );
}
