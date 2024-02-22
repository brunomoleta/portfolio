import { Header } from "@/components/header";
import { PageMain } from "@/components/main";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/main/hero";

export default function Home() {
  return (
      <>
        <Header></Header>
        <PageMain>
          <Hero />
        </PageMain>
        <Footer></Footer>
      </>
  );
}
