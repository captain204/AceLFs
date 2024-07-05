import Footer from "../../src/components/Footer";
import HeaderTwo from "../../src/components/Header/HeaderTwo";
import Preloader from "../../src/components/Preloader";
import dynamic from "next/dynamic";

const CheckoutModules = dynamic(() => import("../../src/modules/Checkout"), {
  loading: () => <Preloader />,
});

export default function Checkout() {
  return (
    <main>
      <HeaderTwo />

      <CheckoutModules />

      <Footer />
    </main>
  );
}
