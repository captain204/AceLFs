import Footer from "../../src/components/Footer";
import HeaderTwo from "../../src/components/Header/HeaderTwo";
import Preloader from "../../src/components/Preloader";
import dynamic from "next/dynamic";

const AdminSignInModules = dynamic(() => import("../../src/modules/Admin"), {
  loading: () => <Preloader />,
});

export default function SignIn() {
  return (
    <main>
      <AdminSignInModules />

    </main>
  );
}
