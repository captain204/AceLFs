import Footer from "../../src/components/Footer";
import HeaderTwo from "../../src/components/Header/HeaderTwo";
import Preloader from "../../src/components/Preloader";
import dynamic from "next/dynamic";

const ServiceModules = dynamic(() => import("../../src/modules/Service"), {
  loading: () => <Preloader />,
});

export default function Service() {
  return (
    <main>
      <HeaderTwo />

      <ServiceModules />

      <Footer />
    </main>
  );
}
