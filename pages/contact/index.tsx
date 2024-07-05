import Footer from "../../src/components/Footer";
import HeaderTwo from "../../src/components/Header/HeaderTwo";
import Preloader from "../../src/components/Preloader";
import dynamic from "next/dynamic";

const ContactModules = dynamic(() => import("../../src/modules/Contact"), {
  loading: () => <Preloader />,
});

export default function Contact() {
  return (
    <main>
      <HeaderTwo />

      <ContactModules />

      <Footer />
    </main>
  );
}
