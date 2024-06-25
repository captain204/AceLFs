import Footer from "../../../src/components/Footer";
import HeaderTwo from "../../../src/components/Header/HeaderTwo";
import Preloader from "../../../src/components/Preloader";
import dynamic from "next/dynamic";

const SignInModules = dynamic(() => import("../../../src/modules/Signin"), {
  loading: () => <Preloader />,
});

export default function SignIn() {
  return (
    <main>
      <HeaderTwo />

      <SignInModules />

      <Footer />
    </main>
  );
}
