// import Footer from "@/components/Footer";
// import HeaderTwo from "@/components/Header/HeaderTwo";
// import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import Footer from "../../src/components/Footer";
import HeaderTwo from "../../src/components/Header/HeaderTwo";
import Preloader from "../../src/components/Preloader";

const AboutUsModules = dynamic(() => import("../../src/modules/AboutUs"), {
  loading: () => <Preloader />,
});

export default function About() {
  return (
    <main>
      <HeaderTwo />

      <AboutUsModules />

      <Footer />
    </main>
  );
}
