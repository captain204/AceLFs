import Footer from "../../src/components/Footer";
import HeaderTwo from "../../src/components/Header/HeaderTwo";
import Preloader from "../../src/components/Preloader";
import dynamic from "next/dynamic";

const SignUpModules = dynamic(() => import("../../src/modules/Signup"), {
  loading: () => <Preloader />,
});

export default function SignUp() {
  return (
    <main>
      <HeaderTwo />

      <SignUpModules />

      <Footer />
    </main>
  );
}
