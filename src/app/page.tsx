import { Header } from "@/components/Header";
import { PageMain } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Main/hero";

export default function Home() {
  return (
      <>
        <Header/>
        <PageMain>
          <Hero />
        </PageMain>
        <Footer/>
      </>
  );
}
