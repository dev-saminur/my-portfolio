import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Agency from "@/components/Agenc";
import Blog from "@/components/Blog";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Agency />
        <Blog />
        <Subscribe />
      </Layout>
    </>
  );
}
