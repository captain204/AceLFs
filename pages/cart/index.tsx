// import Footer from "@/components/Footer";
// import HeaderTwo from "@/components/Header/HeaderTwo";
// import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import HeaderTwo from "../../src/components/Header/HeaderTwo";
import Footer from "../../src/components/Footer";
import Preloader from "../../src/components/Preloader";

const CartModules = dynamic(() => import("../../src/modules/Cart"), {
  loading: () => <Preloader />,
});

export default function Cart() {
  return (
    <main>
      <HeaderTwo />

      <CartModules />

      <Footer />
    </main>
  );
}
