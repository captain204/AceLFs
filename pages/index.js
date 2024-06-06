import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Preloader from "../src/components/Preloader";
import dynamic from "next/dynamic";

const HomeOneModules = dynamic(() => import("../src/modules/HomeOne"), {
  loading: () => <Preloader />,
});

export default function Home() {
  return (
    <main>
      <Header />

      <HomeOneModules />

      <Footer />
    </main>
  );
}
