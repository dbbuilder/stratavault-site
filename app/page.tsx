import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import Formula from "./_components/Formula";
import Problem from "./_components/Problem";
import Features from "./_components/Features";
import Partners from "./_components/Partners";
import Pricing from "./_components/Pricing";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Formula />
        <Problem />
        <Features />
        <Partners />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
